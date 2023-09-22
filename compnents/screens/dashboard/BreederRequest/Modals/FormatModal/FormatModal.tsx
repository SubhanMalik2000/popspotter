"use client";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
interface FunctionProps {
  FormatOpen: () => void;
  FormatClose: () => void;
  Format: boolean;
  closeInnerModal: () => void;
}
const FormatModal = ({
  Format,
  FormatClose,
  closeInnerModal,
}: FunctionProps) => {
  return (
    <div>
      <Box>
        <Modal
          open={Format}
          onClose={FormatClose}
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
                  onClick={FormatClose}
                />
              </Box>
            </Box>
            <Typography variant="h1" color="initial">
              <img src="/assets/Format.png" width={500} height={600} alt="" />
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
                onClick={closeInnerModal}
              >
                Ok
              </Button>
              <a href="/assets/Format.png" download="format">
                <Button
                  sx={{
                    bgcolor: "#064aac !important",
                    color: "white",
                    width: 120,
                  }}
                >
                  Download
                </Button>
              </a>
            </Box>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default FormatModal;
