import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Form from "../Form/Form";
import "./Modal.css";

const BasicModal = ({ isOpen, onClose, editedDeliveryId }) => {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose}>
        <Box className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h6">
            <Form onClose={onClose} editedDeliveryId={editedDeliveryId} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
