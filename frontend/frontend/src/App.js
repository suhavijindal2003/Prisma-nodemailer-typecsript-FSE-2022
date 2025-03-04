import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [pendingBlogs, setPendingBlogs] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPendingBlogs();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4545/api/user");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const fetchPendingBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4545/api/blog/pending");
      setPendingBlogs(response.data);
    } catch (error) {
      console.log("Error fetching pending blogs:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4545/api/user/${id}`);
      fetchUsers();
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const upgradeToAdmin = async (id) => {
    try {
      await axios.put(`http://localhost:4545/api/user/${id}/admin`);
      fetchUsers();
    } catch (error) {
      console.log("Error upgrading user to admin:", error);
    }
  };

  const approveBlog = async (id) => {
    try {
      await axios.put(`http://localhost:4545/api/blog/${id}/approve`);
      fetchPendingBlogs();
    } catch (error) {
      console.log("Error approving blog:", error);
    }
  };

  const rejectBlog = async (id) => {
    try {
      await axios.put(`http://localhost:4545/api/blogs/${id}/reject`);
      fetchPendingBlogs();
    } catch (error) {
      console.log("Error rejecting blog:", error);
    }
  };

  return (
    <AdminDashboard
      users={users}
      pendingBlogs={pendingBlogs}
      deleteUser={deleteUser}
      upgradeToAdmin={upgradeToAdmin}
      approveBlog={approveBlog}
      rejectBlog={rejectBlog}
    />
  );
};

export default App;