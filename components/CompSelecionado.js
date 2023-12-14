import styles from "../styles/CompSelecionado.module.css";
import RemoverComponente from "../public/Assets/RemoverComponente.svg";
import Image from "next/image";

const CompSelecionado = () => {
  return (
    <div className={styles.Caixa}>
      <div className={styles.Conteudo}>
        <div className={styles.Imagem}></div>
        <div className={styles.NomePreco}>
          <div className={styles.Nome}>Memoria RAM</div>
          <div className={styles.Preco}>R$50,00</div>
        </div>
        <Image src={RemoverComponente} width={25} height={25}></Image>
      </div>
    </div>
  );
};

export default CompSelecionado;
