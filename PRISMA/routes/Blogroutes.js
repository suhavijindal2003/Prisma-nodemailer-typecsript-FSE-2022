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


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(id),
      // authorId: true
    },
    select:{
      Title:true,
      Description:true,
      author:{
        select:{
          name:true
        }
      }
    }
  })
  res.json({ blog });
})


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


module.exports = router;