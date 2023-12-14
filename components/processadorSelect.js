import styles from "../styles/Selects.module.css";

const ProcessadorSelect = (props) => {
  return (
    <button onClick={props.onSelect} className={styles.divSelect}>
      <div className={styles.text}>
        {" "}
        {props.isSelected ? <strong>Processador</strong> : <p>Processador</p>}
      </div>
    </button>
  );
};

export default ProcessadorSelect;
