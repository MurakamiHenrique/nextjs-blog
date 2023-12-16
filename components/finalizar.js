// components/SelectedPecas.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from "../styles/final.module.css";
import RemoverComponente from "../public//Assets/RemoverComponente.svg";
import Image from 'next/image';
import PlacaMae from '../public/Assets/ImagemPlacaMae.jpg';

const Final = ({ selectedPecas }) => {
  if (!Array.isArray(selectedPecas) || selectedPecas.length === 0) {
    return <Typography variant="h4"></Typography>;
  }

  return (
    <div className={styles.PedidoCompleto}>
      <Typography variant="h4">Pedido Finalizado</Typography>
      {selectedPecas.map((selectedPeca, index) => (
     <div className={styles.Caixa} key={index} mt={2} >
      <div className={styles.Conteudo}>
        <Image className={styles.Imagem} width={40} height={40} src={PlacaMae}></Image>
        <div className={styles.NomePreco}>
          <div className={styles.Nome}>{`${selectedPeca.name}`}</div>
          <div className={styles.PrecoQuant}>
            <div className={styles.Preco}>{` ${selectedPeca.price}`},00</div>
            <div className={styles.Quant}>{`${(selectedPeca.quantity == "[object Object]")? "1": selectedPeca.quantity}x`}</div>
          </div>
        </div>
      </div>
    </div>
      ))}
    </div>
  );
};

export default Final;
