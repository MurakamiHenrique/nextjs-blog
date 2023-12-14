import styles from "../styles/CompPreco.module.css";
import CompCompraPecas from "./CompCompraPecas";

const CompPrecoPecas = () => {
  return (
    <div className={styles.Caixa}>
        <div  className={styles.PedidoCompleto} >Pedido Completo</div>
      <div className={styles.PedidoCompleto}>
        <CompCompraPecas></CompCompraPecas>
        <CompCompraPecas></CompCompraPecas>
        <CompCompraPecas></CompCompraPecas>
        <CompCompraPecas></CompCompraPecas>
        <CompCompraPecas></CompCompraPecas>
        <CompCompraPecas></CompCompraPecas>
        <CompCompraPecas></CompCompraPecas>
      </div>
    </div>
  );
};

export default CompPrecoPecas;
