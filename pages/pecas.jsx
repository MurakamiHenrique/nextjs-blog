// pages/index.js
import Navbar from "../components/Navbar";
import CompNavbar from "../components/CompNavbar";
import Quadrado from "../components/Quadrado";
import QuadradosContainer from "../components/QuadradosContainer";
import BotaoProxEtapa from "../components/BotaoProxEtapa";
import Header from "../components/HeaderComputador";
import styles from "../styles/HomeContainer.module.css";
import CompSelecionado from "../components/CompSelecionado";
import CompPreco from "../components/CompPrecoComputadores";
import { useState } from "react";
import CompPrecoPecas from "../components/CompPrecoPecas";
import HeaderPecas from "../components/HeaderPecas";
import Link from "next/link";
import SelectedPecasFinal from "../components/CompCompraPecasGPTFINAL";



const Pecas = () => {
  const partsData = [
    { name: "Memória 1", type: "Memória", price: "$100" },
    { name: "HD 1", type: "HD", price: "$150" },
    { name: "Processador 1", type: "Processador", price: "$120" },
    { name: "Placa Mãe 1", type: "Placa Mãe", price: "$200" },
    { name: "Memória 2", type: "Memória", price: "$110" },
    { name: "HD 2", type: "HD", price: "$160" },
    { name: "Processador 2", type: "Processador", price: "$130" },
    { name: "Placa Mãe 2", type: "Placa Mãe", price: "$210" },
    { name: "Memória 3", type: "Memória", price: "$120" },
    { name: "HD 3", type: "HD", price: "$170" },
    { name: "Processador 3", type: "Processador", price: "$140" },
    { name: "Placa Mãe 3", type: "Placa Mãe", price: "$220" },
    { name: "Memória 4", type: "Memória", price: "$130" },
    { name: "HD 4", type: "HD", price: "$180" },
    { name: "Processador 4", type: "Processador", price: "$150" },
    { name: "Placa Mãe 4", type: "Placa Mãe", price: "$230" },
    { name: "Memória 5", type: "Memória", price: "$130" },
  ];

  const [selectedPecas, setSelectedPecas] = useState([]);

  const handlePecaSelect = (selectedPeca) => {
    // Update the selected pecas state
    setSelectedPecas((prevSelectedPecas) => [...prevSelectedPecas, selectedPeca]);
  };


  <style jsx>{`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
  `}</style>;
  return (
    <div className={styles.homeContainer}>
      <HeaderPecas></HeaderPecas>
      <div className={styles.Conteudo}>
      <QuadradosContainer dados={partsData} quadradosPorLinha={5} onPecaSelect={handlePecaSelect} />  
          <SelectedPecasFinal selectedPecas={selectedPecas} />
      </div>
    </div>
  );
};

export default Pecas;
