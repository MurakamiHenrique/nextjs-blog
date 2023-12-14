import { useState } from "react";
import styles from "../styles/QuadradoUnico.module.css";
import SelecionaQuantidade from "./SelecionaQuantidade";
import { Box, Button, Modal, Paper, Typography } from '@mui/material';

const QuadradoUnico = ({ dados, onClick, isSelected }) => {

    return (
      <div>
        <div
          className={`${styles.quadrado} ${isSelected ? styles.clicado : ""}`}
          onClick={onClick}
        >
          <div className={styles.textContainer}>
            {Object.keys(dados).map((campo) => (
              <p key={campo} className={styles.texto}>
                <span style={{ fontFamily: "Nunito", color: "black" }}>
                  {campo}:
                </span>{" "}
                {dados[campo]}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }; 

export default QuadradoUnico;