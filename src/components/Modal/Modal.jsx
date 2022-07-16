import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "../Form/Form";
import "./Modal.css";

const ModalWindow = ({ isOpen, onClose, editedDeliveryId }) => {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose}>
        <Box className="modal">
          <Typography id="modal-modal-title">
            <Form onClose={onClose} editedDeliveryId={editedDeliveryId} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
