import React from "react";

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div>
      <h2>Subscription Status</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Subscription Status</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((sub) => (
            <tr key={sub.id}>
              <td>{sub.username}</td>
              <td>{sub.email}</td>
              <td>{sub.status ? "Active" : "Inactive"}</td>
              <td>{sub.expiryDate || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionList;
