import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.MainHeader}>
        <p className={styles.Logo}>Peça Compra</p>
        <p className={styles.Configure}>Relatório mensal de vendas</p>
      </div>
      <Link href="/">
        <div>Home</div>
      </Link>
    </div>
  );
};

export default Header;