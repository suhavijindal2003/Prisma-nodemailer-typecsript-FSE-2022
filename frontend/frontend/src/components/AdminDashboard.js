import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UserList from "./UserList";
import PendingBlogList from "./PendingBlogList";
import SubscriptionList from "./SubscriptionList"; // New component for subscriptions

const AdminDashboard = ({ 
  users, 
  pendingBlogs, 
  subscriptions, // New prop for subscription data
  deleteUser, 
  upgradeToAdmin, 
  approveBlog, 
  rejectBlog 
}) => {
  const [activeTab, setActiveTab] = useState("users"); // Default to "users"

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        onUsersClick={() => setActiveTab("users")}
        onPendingBlogsClick={() => setActiveTab("pendingBlogs")}
        onSubscriptionClick={() => setActiveTab("subscriptions")} // New button for subscriptions
      />
      <div style={{ flexGrow: 1, padding: "24px" }}>
        {activeTab === "users" && (
          <UserList users={users} deleteUser={deleteUser} upgradeToAdmin={upgradeToAdmin} />
        )}
        {activeTab === "pendingBlogs" && (
          <PendingBlogList pendingBlogs={pendingBlogs} approveBlog={approveBlog} rejectBlog={rejectBlog} />
        )}
        {activeTab === "subscriptions" && (
          <SubscriptionList subscriptions={subscriptions} /> // Display subscription data
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
