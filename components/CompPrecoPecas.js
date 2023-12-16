import styles from "../styles/CompPreco.module.css";
import CompCompraPecas from "./CompCompraPecas";
import SelectedPecas from "./CompPedidoCompleto";

const CompPrecoPecas = () => {
  return (
    <div className={styles.Caixa}>
        <div  className={styles.PedidoCompleto} >Pedido Completo</div>
      <div className={styles.PedidoCompleto}>
        <SelectedPecas></SelectedPecas>
      </div>
    </div>
  );
};

export default CompPrecoPecas;
