const express = require("express");
const router = express.Router();


const { PrismaClient } = require('@prisma/client');
const { sendMail } = require("../utils/sendmail");
const prisma = new PrismaClient();

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  res.json({ user });
})

router.get("/", async (req, res) => {
  try {
    let alluser = await prisma.user.findMany();
    console.log(alluser);
    res.json(alluser);
  } catch (error) {
    res.json({ error: error });
  }
})

router.post("/", async (req, res) => {
  const { email, name, password } = req.body;
  const newuser = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: password
    },
  })
  let token = Math.floor(Math.random() * 100000);
  const newtoken = await prisma.token.create({
    data: {
      token: token,
      userId: newuser.id,
    }
  })
  let Link = `http://localhost:4545/verify/${token}/${newuser.id}`
  sendMail(email, "verify Email", Link)
  res.json({ newuser });
})

router.delete("/:email", async (req, res) => {
  const { email } = req.params; // Extract email from route parameters

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Step 2: Delete all tokens associated with the user
    await prisma.token.deleteMany({
      where: { userId: user.id },
    });
    // Attempt to delete the user
    const deleteUser = await prisma.user.delete({
      where: {
        email: email, // Use the email from the request
      },
    });

    // If successful, send a success response
    res.json({ message: "User deleted successfully", user: deleteUser });

  } catch (error) {
    // Handle specific errors
    console.log("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/update", async (req, res) => {
  const { email, name } = req.body;
  const updateUser = await prisma.user.update({
    where: {
      email: 'suhavijindal@gmail.com',
    },
    data: {
      name: 'Suhavi Jindal',
    },
  })
  res.json({ updateUser });
})

router.put("/:id/admin", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { Role: "ADMIN" },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error upgrading user to admin:", error);
    res.status(500).json({ error: "Failed to upgrade user to admin" });
  }
});
module.exports = router
