import {Box, Button, Modal, Paper, TextField, Typography} from '@mui/material';
import {useState} from 'react';


const SelecionaQuantidade = (props) => {
  const {open, handleClose, handleConfirm} = props;

  const [qty, setQty] = useState(1);

  const handleQtyChange = (event) => {
    setQty(Number(event.target.value));
  };

  const handleConfirmClick = () => {
    handleConfirm(qty);
    setQty(1);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        elevation={5}
        sx={{
          backgroundColor: 'white',
          padding: '2rem',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" sx={{marginBottom: '1rem'}}>
            Selecione a quantidade
          </Typography>
          <TextField
            label="Quantidade"
            variant="outlined"
            type="number"
            inputProps={{min: 1}}
            value={qty}
            onChange={handleQtyChange}
            sx={{marginBottom: '1rem'}}
          />
          <Button variant="contained" onClick={handleConfirmClick}>
            Confirmar
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default SelecionaQuantidade;