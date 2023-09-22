"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/system/Unstable_Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Breeders = () => {
  return (
    <Grid container spacing={2}>
      <Grid sm={12} md={6} lg={3}>
        <Item
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#e2e8f2",
          }}
        >
          <Box component="span">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/assets/user.png" width={40} height={40} alt="" />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#064AAC" }}
                  primary="Total Dog Lovers"
                />
              </ListItemButton>
            </ListItem>
            <Typography
              variant="h4"
              color="initial"
              sx={{ paddingLeft: "20px", color: "#064AAC" }}
            >
              2,200
            </Typography>
          </Box>
        </Item>
      </Grid>

      <Grid sm={12} md={6} lg={3}>
        <Item
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f7efe2",
          }}
        >
          <Box component="span">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/assets/puppu.png" width={40} height={40} alt="" />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#DF8A09" }}
                  primary="Total Dog Lovers"
                />
              </ListItemButton>
            </ListItem>
            <Typography
              variant="h4"
              color="initial"
              sx={{ paddingLeft: "20px", color: "#DF8A09" }}
            >
              2,200
            </Typography>
          </Box>
        </Item>
      </Grid>

      <Grid sm={12} md={6} lg={3}>
        <Item
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#e9eeef",
          }}
        >
          <Box component="span">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/assets/bars.png" width={40} height={40} alt="" />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#537E8E" }}
                  primary="Total Dog Lovers"
                />
              </ListItemButton>
            </ListItem>
            <Typography
              variant="h4"
              color="initial"
              sx={{ paddingLeft: "20px", color: "#537E8E" }}
            >
              2,200
            </Typography>
          </Box>
        </Item>
      </Grid>

      <Grid sm={12} md={6} lg={3}>
        <Item
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#eeedf4",
          }}
        >
          <Box component="span">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/assets/Sold.png" width={40} height={40} alt="" />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#8078BC" }}
                  primary="Total Dog Lovers"
                />
              </ListItemButton>
            </ListItem>
            <Typography
              variant="h4"
              color="initial"
              sx={{ paddingLeft: "20px", color: "#8078BC" }}
            >
              2,200
            </Typography>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Breeders;
