import styles from "../styles/CompPreco.module.css";
import CompCompra from "./CompCompraComputadores";

const CompPreco = () => {
  return (
    <div className={styles.Caixa}>
      <div className={styles.Preco}>R$5000,00</div>
      <div className={styles.PedidoCompleto}>
        <CompCompra></CompCompra>
        <CompCompra></CompCompra>
        <CompCompra></CompCompra>
        <CompCompra></CompCompra>
        <CompCompra></CompCompra>
        <CompCompra></CompCompra>
        <CompCompra></CompCompra>
      </div>
    </div>  
  );
};

export default CompPreco;
