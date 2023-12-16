import Header from "../components/HeaderComputador";
import { useState } from "react";
import Link from "next/link";
import SelecionaQuantidade from "../components/SelecionaQuantidade";
import Final from "../components/finalizar";
import { Box, Typography } from '@mui/material';
import styles from "../styles/CompCompra.module.css";
import RemoverComponente from "../public//Assets/RemoverComponente.svg";
import Image from 'next/image';
import PlacaMae from '../public/Assets/ImagemPlacaMae.jpg';
import QuadradosContainer from "../components/QuadradosContainer";

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


const Finalizar = () => {
    const [selectedPecas, setSelectedPecas] = useState([]);

    const handlePecaSelect = (selectedPeca) => {
      // Update the selected pecas state
      setSelectedPecas((prevSelectedPecas) => [...prevSelectedPecas, selectedPeca]);
    };
  
  <style jsx>{`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
  `}</style>;
  return (
    <div className={styles.body}>
      <Header></Header>
      <QuadradosContainer dados={partsData} quadradosPorLinha={0} onPecaSelect={handlePecaSelect} />  

        <Final selectedPecas={selectedPecas}></Final>
        
    </div>
  );
};

export default Finalizar;