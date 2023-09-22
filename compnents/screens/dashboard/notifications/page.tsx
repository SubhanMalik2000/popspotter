import { Box } from "@mui/material";
import React from "react";
import Tabs from "./tabs";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Notify = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "rgb(6, 74, 172)",
          margin: "16px 40px",
          padding: "30px 0px",
          borderRadius: "15px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h4"
              color="initial"
              sx={{
                color: "white",
                marginLeft: "2rem",
                fontWeight: "500",
              }}
            >
              Notifications
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/assets/bell.png" width={91} height={91} alt="" />
          </Grid>
        </Grid>
      </Box>
      <Tabs />
    </Box>
  );
};

export default Notify;
