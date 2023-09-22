"use client";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import NicFront from "./Modals/NicFront/NicFront";
import NicBack from "./Modals/NicBack/NicBack";

const UserInformation = () => {
  const [isOpen, setisOpen] = useState(false);
  const [BackPic, setBackPic] = useState(false);
  const CloseModal = () => setisOpen(false);
  const OpenModal = () => setisOpen(true);
  const BackOpen = () => setBackPic(true);
  const BackCloSE = () => setBackPic(false);

  return (
    <Box>
      <Box sx={{ bgcolor: "#f9f9f9", padding: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              First Name
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Gomes
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              Last Name
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Collins
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              Phone Number
            </Typography>
            <Typography variant="subtitle1" color="initial">
              +17689054367
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              Email
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Akinzzz@universitystudent.com
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              State
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Texas
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              City
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Texas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="initial"
              sx={{
                color: "#064aac",
                fontSize: 20,
                fontWeight: "700",
                marginTop: "1.2rem",
              }}
            >
              Document
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "20px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              Identify
            </Typography>
            <img
              src="/assets/front.png"
              width={350}
              height={350}
              alt=""
              onClick={OpenModal}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "#787878",
                fontSize: "20px",
                fontFamily: "Sofia Pro",
                fontWeight: 400,
              }}
              variant="subtitle1"
              color="initial"
            >
              Breeders document
            </Typography>
            <img
              src="/assets/back.png"
              width={350}
              height={350}
              alt=""
              onClick={BackOpen}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        {isOpen ? (
          <NicFront isOpen={isOpen} CloseModal={CloseModal} />
        ) : BackPic ? (
          //  Back
          <NicBack BackPic={BackPic} BackCloSE={BackCloSE} />
        ) : null}
      </Box>
    </Box>
  );
};

export default UserInformation;
