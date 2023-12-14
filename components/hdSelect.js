import styles from "../styles/Selects.module.css";

const HdSelect = (props) => {
  return (
    <button onClick={props.onSelect} className={styles.divSelect}>
      <div className={styles.text}>
        {props.isSelected ? <strong>HD</strong> : <p>HD</p>}
      </div>
    </button>
  );
};

export default HdSelect;
