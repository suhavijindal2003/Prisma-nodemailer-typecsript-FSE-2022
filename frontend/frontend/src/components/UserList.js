import React from "react";
import { Typography, Button } from "@mui/material";
import { Delete, Upgrade } from "@mui/icons-material";

const UserList = ({ users, deleteUser, upgradeToAdmin }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "8px",
          }}
        >
          <Typography variant="body1">
            {user.name} - {user.email}
          </Typography>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Upgrade />}
            onClick={() => upgradeToAdmin(user.id)}
          >
            Upgrade to Admin
          </Button>
        </div>
      ))}
    </div>
  );
};

export default UserList;