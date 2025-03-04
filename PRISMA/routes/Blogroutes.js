const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const isLoggedin = require("../Middleware/verifyLogin");
const prisma = new PrismaClient();

router.post("/", isLoggedin, async (req, res) => {
  const { Title, Description, authorId } = req.body;
  const newblog = await prisma.blog.create({
    data: {
      Title: Title,
      Description: Description,
      authorId: req.user.id
    },
  })
  res.json({ message: "blog added successfully", data: newblog });
})

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
  
//   const blog = await prisma.blog.findUnique({
//     where: {
//       id: parseInt(id)
//     },
//     select:{
//       Title:true,
//       Description:true,
//       author:{
//         select:{
//           name:true
//         }
//       }
//     }
//   })
//   res.json({ blog });
// })

router.get("/", async (req, res) => {
  try {
      let allblogs = await prisma.blog.findMany({
          select: {
              id: true,
              Title: true,
              Description: true,
              author: {
                  select: {
                      name: true
                  }
              }
          }
      });
      console.log(allblogs);
      res.json({ blogs: allblogs });
  } catch (error) {
      res.json({ error: error });
  }
});

router.get("/pending", async (req, res) => {
  try {
    const pendingBlogs = await prisma.blog.findMany({
      where: { status: "PENDING" },
      select: {
        id: true,
        Title: true,
        Description: true,
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    res.json({ blogs: pendingBlogs });
  } catch (error) {
    console.error("Error fetching pending blogs:", error);
    res.status(500).json({ error: "Failed to fetch pending blogs" });
  }
});

router.put("/:id/approve", async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await prisma.blog.update({
      where: { id: parseInt(id) },
      data: { status: "APPROVED" },
      include: { author: true }, // Ensure author data is included
    });

    // Check if the blog has an author and an email
    // if (!blog.author || !blog.author.email) {
    //   return res.status(400).json({ error: "Author email not found" });
    // }

    // Sending approval email
    // const email = blog.author.email;
    // const subject = "Blog Approved";
    // const message = `Your blog titled "${blog.Title}" has been approved.`;
    
    // await sendMail(email, subject, message);

    res.json({ message: "Blog approved successfully and email sent", blog });
  } catch (error) {
    console.log("Error approving blog:", error);
   
  }
});



router.put("/:id/reject", async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await prisma.blog.update({
      where: { id: parseInt(id) },
      data: { status: "REJECTED" },
    });

    res.json({ message: "Blog rejected successfully", blog });
  } catch (error) {
    console.log("Error rejecting blog:", error);
    res.status(500).json({ error: "Failed to reject blog" });
  }
});

module.exports = router;
