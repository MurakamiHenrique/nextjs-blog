import styles from "../styles/Selects.module.css";

const PlacaMaeSelect = (props) => {
  return (
    <button onClick={props.onSelect} className={styles.divSelect}>
      <div className={styles.text}>
        {props.isSelected ? <strong>Placa Mae</strong> : <p>Placa Mae</p>}
      </div>
    </button>
  );
};

export default PlacaMaeSelect;
