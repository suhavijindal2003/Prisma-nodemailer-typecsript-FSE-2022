// src/components/SubscriptionForm.js
import React, { useState } from "react";
import axios from "axios";

const SubscriptionForm = ({ userId }) => {
  const [plan, setPlan] = useState("MONTHLY");
  const [price, setPrice] = useState(9.99);
  const [duration, setDuration] = useState(1); // Duration in months
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:4545/api/subscription/subscribe", {
        userId,
        plan,
        price,
        duration,
      });
      setMessage("Subscription successful!");
      console.log("Subscription created:", response.data);
    } catch (error) {
      setMessage("Failed to subscribe. Please try again.");
      console.error("Error subscribing:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Subscribe to Promotion Content</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Plan</label>
        <select
          className="w-full p-2 border rounded"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="MONTHLY">Monthly ($9.99)</option>
          <option value="YEARLY">Yearly ($99.99)</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Duration (Months)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default SubscriptionForm;