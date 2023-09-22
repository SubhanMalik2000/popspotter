import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchOption from "./search";
import Lists from "./list";
import UserData from "./userData";

const PostVrification = () => {
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
                fontWeight: "400",
              }}
            >
              Breeders Request
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
            <img src="/assets/notes.png" width={150} height={150} alt="" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          margin: "16px 42px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ bgcolor: "#f9f9f9" }}>
              <Typography
                variant="inherit"
                color="#064aac"
                sx={{
                  fontSize: 17,
                  fontWeight: 600,
                  bgcolor: "#e2e8f2",
                  padding: "15px 35px",
                }}
              >
                Request list
              </Typography>
              <Box sx={{ margin: "15px 0px" }}>
                <SearchOption />
              </Box>
              <Box>
                <Lists />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              {/* userinformation  */}
              <UserData />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PostVrification;
