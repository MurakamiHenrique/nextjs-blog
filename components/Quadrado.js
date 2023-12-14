// components/Quadrado.js
import { useState } from "react";
import styles from "../styles/Quadrado.module.css";
import SelecionaQuantidade from "./SelecionaQuantidade";
import { Box, Button, Modal, Paper, Typography } from '@mui/material';

const Quadrado = ({ dados, isSelected }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedQty, setSelectedQty] = useState(1);

  const handleSquareClick = () => {
    // Open the modal when the square is clicked
    setModalOpen(true);
  };

  const handleModalClose = () => {
    // Close the modal
    setModalOpen(false);
  };

  const handleQtyConfirm = (qty) => {
    // Handle the confirmed quantity
    setSelectedQty(qty);
    // Close the modal after confirming the quantity
    handleModalClose();
  };

  return (
    <div>
      <div
        className={`${styles.quadrado} ${isSelected ? styles.clicado : ''}`}
        onClick={handleSquareClick}
      >
        <div className={styles.textContainer}>
          {/* Display selected quantity */}
          <p className={styles.texto}>Quantidade: {selectedQty}</p>
          {/* Display other data from dados */}
          {Object.keys(dados).map((campo) => (
            <p key={campo} className={styles.texto}>
              <span style={{ fontFamily: 'Nunito', color: 'black' }}>
                {campo}:
              </span>{' '}
              {dados[campo]}
            </p>
          ))}
        </div>
      </div>

      {/* Render the SelecionaQuantidade modal */}
      <SelecionaQuantidade
        open={isModalOpen}
        handleClose={handleModalClose}
        handleConfirm={handleQtyConfirm}
      />
    </div>
  );
};

export default Quadrado;
