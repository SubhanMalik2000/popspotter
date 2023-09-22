import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import WorkTable from "./table";

const Breed = () => {
  return (
    <div>
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
              Breeders
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
            <img src="/assets/Cat.png" width={91} height={91} alt="" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ margin: "0px 40px" }}>
        <WorkTable />
      </Box>
    </div>
  );
};

export default Breed;
