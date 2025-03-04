const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 4545; // Use environment variable for port

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // Log incoming requests

// Routes
app.use("/api/user", require("./routes/userroutes"));
app.use("/api/blog", require("./routes/Blogroutes"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/likes", require("./routes/likeroute"));

app.use("/api/subscription", require("./routes/subscriptionRoutes"));
// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Email verification route
app.get("/verify/:token/:userid", async (req, res) => {
  const { token, userid } = req.params;

  try {
    // Check if the token exists
    const isToken = await prisma.token.findFirst({
      where: {
        token: parseInt(token),
        userId: parseInt(userid),
      },
    });

    if (!isToken) {
      return res.status(400).send("Invalid token or user ID");
    }

    // Update user's verification status
    const updateUserEmail = await prisma.user.update({
      where: {
        id: parseInt(userid),
      },
      data: {
        verified: true, // Ensure this field exists in your Prisma schema
      },
    });

    res.send("Email verified. Please login to continue.");
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).send("Internal server error");
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});