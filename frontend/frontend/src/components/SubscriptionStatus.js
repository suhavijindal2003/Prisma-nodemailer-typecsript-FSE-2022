// src/components/SubscriptionStatus.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscriptionStatus = ({ userId }) => {
  const [isActive, setIsActive] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:4545/api/subscription/status/${userId}`);
        setIsActive(response.data.isActive);
        setSubscription(response.data.subscription);
      } catch (error) {
        console.error("Error fetching subscription status:", error);
      }
    };

    fetchSubscriptionStatus();
  }, [userId]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Subscription Status</h2>
      {isActive ? (
        <p className="text-green-600">You have an active subscription until {new Date(subscription.endDate).toLocaleDateString()}.</p>
      ) : (
        <p className="text-red-600">You do not have an active subscription.</p>
      )}
    </div>
  );
};

export default SubscriptionStatus;