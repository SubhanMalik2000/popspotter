"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

// Done

export default function SiteNav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        bgcolor: "#064AAC",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          color: "white",
        }}
      >
        <Link href="/">
          <img src="/assets/pupspotter.png" width={70} height={70} alt="" />
          <p>pupspotter</p>
        </Link>
      </Box>

      <List sx={{ color: "white" }}>
        <Link href="/HomeDash">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src="/assets/House.png" width={30} height={30} alt="" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="/BreederRequests">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src="/assets/notes.png" width={30} height={30} alt="" />
              </ListItemIcon>
              <ListItemText primary="Breeders Request" />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img src="/assets/tick.png" width={30} height={30} alt="" />
            </ListItemIcon>
            <ListItemText primary="New Post Verify" />
          </ListItemButton>
        </ListItem>

        <Link href="/AllUsers">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src="/assets/group.png" width={30} height={30} alt="" />
              </ListItemIcon>
              <ListItemText primary="All Users" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="/Breeders">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src="/assets/puppu.png" width={30} height={30} alt="" />
              </ListItemIcon>
              <ListItemText primary="Breeders" />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img src="/assets/hands.png" width={30} height={30} alt="" />
            </ListItemIcon>
            <ListItemText primary="Reported Abuse" />
          </ListItemButton>
        </ListItem>

        <Link href="/Notifications">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src="/assets/bell.png" width={30} height={30} alt="" />
              </ListItemIcon>
              <ListItemText primary="Push Notification" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      ></Box>
    </Box>
  );
}
