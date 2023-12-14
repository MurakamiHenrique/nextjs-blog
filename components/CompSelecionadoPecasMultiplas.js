import styles from "../styles/CompSelecionado.module.css";
import RemoverComponente from "../public/Assets/RemoverComponente.svg";
import Image from "next/image";
import AdicionarComponente from "../public/Assets/AdicionarComponente.svg";

const CompSelecionadoPecasMultiplas = () => {
  return (
    <div className={styles.Caixa}>
      <div className={styles.Conteudo}>
        <div className={styles.Imagem}></div>
        <div className={styles.NomePreco}>
          <div className={styles.Nome}>Memoria RAM</div>
          <div className={styles.Preco}>R$50,00</div>
        </div>
        <div className={styles.Botoes}>
        <Image  onClick={() => console.log('adiciona') } className={styles.Botao} src={AdicionarComponente} width={18} height={18}></Image>
        <Image onClick={() => console.log('remove') } className={styles.Botao} src={RemoverComponente} width={25} height={25}></Image>
        </div>

      </div>
    </div>
  );
};

export default CompSelecionadoPecasMultiplas;
