import { Box, Typography, Button, Divider, colors } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import Modal from "@mui/material/Modal";
import RejectionNote from "./RejectionNote";

interface ButtonProps {
  close: () => void;
  Open: () => void;
  reject: boolean;
  setreject: Dispatch<SetStateAction<boolean>>;
}
const AcceptModal = ({ close, reject, setreject }: ButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const innerModal = () => {
    setIsOpen(true);
  };
  const closeInnerModal = () => {
    setIsOpen(false);
    setreject(false);
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

  const customerName = "Gate Collins";
  return (
    <Box textAlign={"center"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 4,
        }}
      >
        <img src="/assets/Frame.png" alt="Fram" width={70} height={50} />
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
        Rejection
      </Typography>
      <Typography variant="caption" color="initial" fontSize={16}>
        Are sure you want to reject <br />{" "}
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
            border: "0.5px solid var(--grey-5, #787878)",
            color: "black",
            width: "114px",
          }}
          onClick={close}
        >
          Cancel
        </Button>
        <Button
          sx={{
            borderRadius: "6px",
            width: "114px",
            bgcolor: "#064AAC !important",
            color: "white",
          }}
          onClick={innerModal}
        >
          Yes
        </Button>
      </Box>
      <Box>
        {reject ? (
          <Modal
            open={isOpen}
            onClose={closeInnerModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* //later */}
              <RejectionNote close={closeInnerModal} setreject={setreject} />
              {/* <AfterReject closeInnerModal={closeInnerModal} accept={reject} /> */}
            </Box>
          </Modal>
        ) : null}
      </Box>
    </Box>
  );
};

export default AcceptModal;
