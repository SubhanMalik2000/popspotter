"use client";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface FunctionProps {
  BackPic: boolean;
  BackCloSE: () => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  padding: 3,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
};

const NicBack = ({ BackPic, BackCloSE }: FunctionProps) => {
  return (
    <div>
      <Box>
        <Modal
          open={BackPic}
          onClose={BackCloSE}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: -55,
                  right: -25,
                  // bgcolor: "black",
                }}
              >
                <img
                  src="/assets/cancel.png"
                  width={30}
                  height={30}
                  alt="cancel"
                  onClick={BackCloSE}
                />
              </Box>
            </Box>
            <Typography variant="h1" color="initial">
              <img src="/assets/NIC.png" width={500} height={600} alt="" />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                padding: "0px 85px",
                marginTop: 2,
              }}
            >
              <Button
                sx={{
                  bgcolor: "#fff !important",
                  color: "black",
                  border: "1px solid black",
                  width: 120,
                }}
                onClick={BackCloSE}
              >
                Ok
              </Button>
              <Button
                sx={{
                  bgcolor: "#064aac !important",
                  color: "white",
                  width: 120,
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default NicBack;
