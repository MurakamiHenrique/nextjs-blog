import styles from "../styles/CompCompra.module.css";
import RemoverComponente from "../public/vercel.svg";

const CompCompra = () => {
  return (
    <div className={styles.Caixa}>
      <div className={styles.Conteudo}>
        <div className={styles.Imagem}></div>
        <div className={styles.NomePreco}>
          <div className={styles.Nome}>Memoria RAM</div>
          <div className={styles.Preco}>R80,00</div>
        </div>
      </div>
    </div>
  );
};

export default CompCompra;
