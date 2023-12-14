import styles from "../styles/Header.module.css";
import Link from "next/link";

const HeaderPecas = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.MainHeader}>
        <p className={styles.Logo}>Peça Compra</p>
        <p className={styles.Configure}>Escolha as peças</p>
      </div>
      <Link href="/"><div>Home</div></Link>

    </div>
  );
};

export default HeaderPecas;
