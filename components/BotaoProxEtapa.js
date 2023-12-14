import styles from "../styles/BotaoProxEtapa.module.css";

const BotaoProxEtapa = (props) => {
  return (
    <button onClick={props.onSelect} className={styles.divBotao}>
      <p>Próxima Etapa</p>
    </button>
  );
};

export default BotaoProxEtapa;
