import { Box, Typography, Button, Divider, colors } from "@mui/material";
import React from "react";
import FormatModal from "../Modals/FormatModal/FormatModal";
import { useState } from "react";

interface ButtonProps {
  closeInnerModal: () => void;
  accept: boolean;
}
const AfterAccept = ({ closeInnerModal }: ButtonProps) => {
  const customerName = "Gate Collins";
  const [Format, setFormat] = useState(false);

  const FormatOpen = () => setFormat(true);
  const FormatClose = () => setFormat(false);

  return (
    <Box textAlign={"center"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          pt: 4,
        }}
      >
        <img src="/assets/tick1.png" alt="Fram" width={70} height={50} />
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: "var(--Green-1, #219653)",
          fontfamily: "Sofia Pro",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "131.5%",
          padding: "10px 0px",
        }}
        color="initial"
      >
        Successful
      </Typography>
      <Typography variant="caption" color="initial" fontSize={16}>
        Are sure you want to accept <br />{" "}
        <b style={{ color: "blue" }}>{customerName}</b> breeders request
      </Typography>
      <Divider sx={{ paddingTop: "20px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 60px",
        }}
      >
        <Button
          sx={{
            borderRadius: "6px",
            width: "114px",
            bgcolor: "#064AAC !important",
            color: "white",
          }}
          onClick={FormatOpen}
        >
          Yes
        </Button>
      </Box>
      <Box>
        <FormatModal
          FormatOpen={FormatOpen}
          Format={Format}
          FormatClose={FormatClose}
          closeInnerModal={closeInnerModal}
        />
      </Box>
    </Box>
  );
};

export default AfterAccept;
