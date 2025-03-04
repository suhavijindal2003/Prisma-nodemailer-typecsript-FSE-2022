import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const drawerWidth = 240;

const Sidebar = ({ onUsersClick, onPendingBlogsClick }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button onClick={onUsersClick}>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button onClick={onPendingBlogsClick}>
          <ListItemText primary="Pending Blogs" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;