import React from "react";
import { Typography, Button } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

const PendingBlogList = ({ blogs = [], approveBlog, rejectBlog }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Pending Blogs
      </Typography>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "8px",
          }}
        >
          <Typography variant="body1">
            {blog.Title} - {blog.Description}
          </Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<CheckCircle />}
            onClick={() => approveBlog(blog.id)}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Cancel />}
            onClick={() => rejectBlog(blog.id)}
          >
            Reject
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PendingBlogList;