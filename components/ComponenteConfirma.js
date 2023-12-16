// components/ConfirmationModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ConfirmationModal = ({ open, handleClose, handleConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography id="modal-title" variant="h6" component="h2">
          Confirma a Escolha?
        </Typography>
        <Button onClick={handleConfirm} variant="contained" sx={{ mt: 2 }}>
          Confirmar
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
