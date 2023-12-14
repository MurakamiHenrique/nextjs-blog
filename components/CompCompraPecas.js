import styles from "../styles/CompCompra.module.css";
import RemoverComponente from "../public//Assets/RemoverComponente.svg";
import Image from "next/image";

const CompCompraPecas = () => {
  return (
    <div className={styles.Caixa}>
      <div className={styles.Conteudo}>
        <div className={styles.Imagem}></div>
        <div className={styles.NomePreco}>
          <div className={styles.Nome}>Memoria RAM</div>
          <div className={styles.PrecoQuant}>
            <div className={styles.Preco}>R$900,00</div>
            <div className={styles.Quant}>x2</div>
          </div>
        </div>
        <Image src={RemoverComponente} width={25} height={25}></Image>
      </div>
    </div>
  );
};

export default CompCompraPecas;
