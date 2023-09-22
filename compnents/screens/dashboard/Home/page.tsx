import React from "react";
import Breeders from "./breeders/page";
import HomeTable from "../../tables/table/page";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BarChart } from "./Charts/chart1";
import Grid from "@mui/material/Grid";
import { BarChart2 } from "./Charts/chart2";

const HomeDesh = () => {
  return (
    <Box sx={{ margin: "2rem" }}>
      <Box
        sx={{
          padding: "30px",
          bgcolor: "#F9F9F9",
        }}
      >
        <Breeders />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <BarChart />
          </Grid>
          <Grid item xs={6}>
            <BarChart2 />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ paddingBottom: "20px" }}
          >
            Listing Verification
          </Typography>
          <Button variant="text" style={{ color: "#787878" }}>
            View All
          </Button>
        </Box>
        <HomeTable />
      </Box>
    </Box>
  );
};

export default HomeDesh;
