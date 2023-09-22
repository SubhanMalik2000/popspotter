import { Box, Typography, Button, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import Modal from "@mui/material/Modal";
import AfterReject from "./AfterReject";

interface PropsButton {
  close: () => void;
  setreject: Dispatch<SetStateAction<boolean>>;
}
const RejectionNote = ({ close, setreject }: PropsButton) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const innerModal = () => setIsOpen(true);
  const closeInnerModal = () => {
    setIsOpen(false);
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: -30,
          right: -5,
          //   bgcolor: "black",
        }}
      >
        <img
          src="/assets/cancel.png"
          width={30}
          height={30}
          alt="cancel"
          onClick={close}
        />
      </Box>

      <Box
        sx={{
          height: "305px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontfamily: "Sofia Pro",
            fontStyle: "normal",
            lineHeight: "131.5%",
            paddingTop: "1.5rem",
            paddingLeft: "3.1rem",
          }}
          color="initial"
        >
          Kindly State Reason for rejection
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1px 0px",
          }}
        >
          <TextField
            multiline
            rows={7}
            sx={{ width: 300, bgcolor: "white", borderColor: "#D0D0D0" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px 0 30px 0",
          }}
        >
          <Button
            sx={{
              borderRadius: "6px",
              width: "300px",
              bgcolor: "#064AAC !important",
              color: "white",
            }}
            onClick={innerModal}
          >
            Ok
          </Button>
        </Box>
      </Box>
      <Modal
        open={isOpen}
        onClose={closeInnerModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* //later */}
          <AfterReject close={close} />
        </Box>
      </Modal>
    </Box>
  );
};

export default RejectionNote;
