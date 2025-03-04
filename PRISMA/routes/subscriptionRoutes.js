// routes/subscriptionRoutes.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// Create a new subscription
router.post("/subscribe", async (req, res) => {
  const { userId, plan, price, duration } = req.body;

  try {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + duration); // Add duration (in months) to the start date

    const subscription = await prisma.subscription.create({
      data: {
        userId,
        startDate,
        endDate,
        plan,
        price,
        status: "ACTIVE",
      },
    });

    res.json(subscription);
  } catch (error) {
    console.log("Error creating subscription:", error);
    res.status(500).json({ error: "Failed to create subscription" });
  }
});
// Check if a user has an active subscription
router.get("/status/:userId", async (req, res) => {
    const { userId } = req.params;
  
    try {
      const subscription = await prisma.subscription.findFirst({
        where: {
          userId: parseInt(userId),
          status: "ACTIVE",
          endDate: { gte: new Date() }, // Subscription is still active
        },
      });
  
      if (subscription) {
        res.json({ isActive: true, subscription });
      } else {
        res.json({ isActive: false });
      }
    } catch (error) {
      console.log("Error checking subscription status:", error);
      res.status(500).json({ error: "Failed to check subscription status" });
    }
  });
  // Cancel a subscription
router.put("/cancel/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const subscription = await prisma.subscription.update({
        where: { id: parseInt(id) },
        data: { status: "CANCELLED" },
      });
  
      res.json(subscription);
    } catch (error) {
      console.log("Error cancelling subscription:", error);
      res.status(500).json({ error: "Failed to cancel subscription" });
    }
  });
module.exports = router;