import Header from "../components/HeaderComputador";
import styles from "../styles/Inicio.module.css";
import { useState } from "react";
import Link from "next/link";
import SelecionaQuantidade from "../components/SelecionaQuantidade";

const Inicio = () => {
  <style jsx>{`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
  `}</style>;
  return (
    <div className={styles.body}>
      <Header></Header>
      <div className={styles.TipoDaCompra}>Selecione o tipo da compra:</div>
      <div className={styles.botoesDaCompra}>
        <Link href="./pecas">
          <button className={styles.botaoCompra}>
            <p>Peças</p>
          </button>
        </Link>
        <Link href="./computadores">
          <button className={styles.botaoCompra}>
            <p>Computadores</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
