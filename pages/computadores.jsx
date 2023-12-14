// pages/index.js
import Navbar from "../components/Navbar";
import Link from "next/link";
import CompNavbar from "../components/CompNavbar";
import Quadrado from "../components/Quadrado";
import QuadradosContainer from "../components/QuadradosContainer";
import BotaoProxEtapa from "../components/BotaoProxEtapa";
import Header from "../components/HeaderComputador";
import styles from "../styles/HomeContainer.module.css";
import CompSelecionado from "../components/CompSelecionado";
import CompPreco from "../components/CompPrecoComputadores";
import { useState } from "react";
import HdSelect from "../components/hdSelect";
import ProcessadorSelect from "../components/processadorSelect";
import MemoriaSelect from "../components/memoriaSelect";
import PlacaMaeSelect from "../components/placaMaeSelect";
import CompSelecionadoPecasMultiplas from "../components/CompSelecionadoPecasMultiplas";
import QuadradosUnicosContainer from "../components/QuadradosUnicosContainer";

const Home = () => {
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
  const [selectedComponent, setSelectedComponent] = useState("placaMae");

  const handleComponentSelect = (option) => {
    setSelectedComponent(option);
  };

  const renderComponentContent = () => {
    switch (selectedComponent) {
      case "placaMae":
        return (
          <div>
            {" "}
            <div className={styles.homeContainer}>
              <div>Placa Mae</div>

              <div className={styles.Conteudo}>
                <QuadradosUnicosContainer dados={partsData} quadradosPorLinha={1} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa
                    onSelect={() => handleComponentSelect("processador")}
                    isSelected={selectedComponent === "processador"}
                  ></BotaoProxEtapa>
                  <CompSelecionado></CompSelecionado>
                  <CompPreco></CompPreco>
                </div>
              </div>
            </div>
          </div>
        );
      case "processador":
        return (
          <div>
            {" "}
            <div className={styles.homeContainer}>
              <div>Processador</div>
              <div className={styles.Conteudo}>
                <QuadradosUnicosContainer dados={partsData} quadradosPorLinha={2} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa
                    onSelect={() => handleComponentSelect("memoria")}
                    isSelected={selectedComponent === "memoria"}
                  ></BotaoProxEtapa>
                  <CompSelecionado></CompSelecionado>
                  <CompPreco></CompPreco>
                </div>
              </div>
            </div>
          </div>
        );
      case "memoria":
        return (
          <div>
            {" "}
            <div className={styles.homeContainer}>
              <div>memoria</div>
              <div className={styles.Conteudo}>
                <QuadradosContainer dados={partsData} quadradosPorLinha={3} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa
                    onSelect={() => handleComponentSelect("hd")}
                    isSelected={selectedComponent === "hd"}
                  ></BotaoProxEtapa>
                  <CompSelecionadoPecasMultiplas></CompSelecionadoPecasMultiplas>
                  <CompPreco></CompPreco>
                </div>
              </div>
            </div>
          </div>
        );
      case "hd":
        return (
          <div>
            {" "}
            <div className={styles.homeContainer}>
              <div>HD</div>
              <div className={styles.Conteudo}>
                <QuadradosContainer dados={partsData} quadradosPorLinha={4} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa></BotaoProxEtapa>
                  <CompSelecionadoPecasMultiplas></CompSelecionadoPecasMultiplas>
                  <CompPreco></CompPreco>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  <style jsx>{`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
  `}</style>;

  return (
    <div className={styles.homeContainer}>
      <Header></Header>
      <CompNavbar />
      <div className={styles.navBar}>
        <PlacaMaeSelect
          onSelect={() => handleComponentSelect("placaMae")}
          isSelected={selectedComponent === "placaMae"}
        ></PlacaMaeSelect>

        <ProcessadorSelect
          onSelect={() => handleComponentSelect("processador")}
          isSelected={selectedComponent === "processador"}
        ></ProcessadorSelect>

        <MemoriaSelect
          onSelect={() => handleComponentSelect("memoria")}
          isSelected={selectedComponent === "memoria"}
        />

        <HdSelect
          onSelect={() => handleComponentSelect("hd")}
          isSelected={selectedComponent === "hd"}
        ></HdSelect>
      </div>
      <div>{renderComponentContent()}</div>
    </div>
  );
};

export default Home;
