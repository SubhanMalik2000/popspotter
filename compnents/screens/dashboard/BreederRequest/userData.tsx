"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UserInformation from "./userInformation";
import AcceptModal from "./AcceptProcess/AcceptModal";
import RejectModal from "./RejectProcess/RejectModal";

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

export default function UserData() {
  // for accept modal
  const [accept, setaccept] = React.useState(false);
  const handleOpen = () => setaccept(true);
  const handleClose = () => setaccept(false);

  // for Reject  modal
  const [reject, setreject] = React.useState(false);
  const handOpen = () => setreject(true);
  const handClose = () => setreject(false);

  return (
    <div>
      <Box
        sx={{
          fontSize: 17,
          fontWeight: 600,
          bgcolor: "#e2e8f2",
          padding: "15px 35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="inherit" color="#064aac">
          User Informations
        </Typography>
        <Box>
          <Button
            sx={{
              bgcolor: "#064aac !important",
              width: 100,
              padding: 1,
              textTransform: "capitalize",
              marginRight: "1rem",
            }}
            variant="contained"
            onClick={handleOpen}
          >
            Accept
          </Button>

          <Button
            sx={{
              bgcolor: "white !important",
              width: 100,
              padding: 1,
              color: "red ",
              border: "1px solid red",
              textTransform: "capitalize",
            }}
            variant="contained"
            onClick={handOpen}
          >
            Reject
          </Button>
        </Box>
      </Box>
      <UserInformation />
      <Box>
        {accept ? (
          <Modal
            open={accept}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AcceptModal
                close={handleClose}
                Open={handleOpen}
                accept={accept}
                setAccept={setaccept}
              />
            </Box>
          </Modal>
        ) : reject ? (
          <Modal
            open={reject}
            onClose={handClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <RejectModal
                close={handClose}
                Open={handOpen}
                reject={reject}
                setreject={setreject}
              />
            </Box>
          </Modal>
        ) : null}
      </Box>
    </div>
  );
}
