import styles from "../styles/Selects.module.css";

const MemoriaSelect = (props) => {
  return (
    <button onClick={props.onSelect} className={styles.divSelect}>
      <div className={styles.text}>
        {props.isSelected ? <strong>Memoria</strong> : <p>Memoria</p>}
      </div>
    </button>
  );
};

export default MemoriaSelect;
