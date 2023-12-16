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
import SelectedPecas from "../components/CompCompraPecasGPT";
import ConfirmationModal from "../components/ComponenteConfirma";
import axios from 'axios';

const Home = () => {
 /*  const [partsData, setPartsData] = useState([]);

  useEffect(() => {
    // Make a GET request to your API endpoint
    axios.get('https://your-api.com/parts')
      .then(response => {
        // Assuming the API response has a property named 'parts'
        setPartsData(response.data.parts);
      })
      .catch(error => {
        console.error('Error fetching parts data:', error);
      });
  }, []);
 */
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
  const [selectedComponent, setSelectedComponent] = useState('placaMae');
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handlePecaSelect = (selectedPeca) => {
    // Update the selected pecas state
    setSelectedPecas((prevSelectedPecas) => [...prevSelectedPecas, selectedPeca]);

    // Open the confirmation modal
    setConfirmationModalOpen(true);
  };

  const handleComponentSelect = (option) => {
    setSelectedComponent(option);
  };

  const handleConfirmModal = () => {
    // Handle the confirmation action here

    // Close the confirmation modal
    setConfirmationModalOpen(false);

    // Navigate to the next component
    switch (selectedComponent) {
      case 'placaMae':
        handleComponentSelect('processador');
        break;
      case 'processador':
        handleComponentSelect('memoria');
        break;
      case 'memoria':
        handleComponentSelect('hd');
        break;
      case 'hd':
        // Navigate to the next step or perform any other action
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    // Close the confirmation modal without changing the component
    setConfirmationModalOpen(false);
  };

  const renderComponentContent = () => {
    switch (selectedComponent) {
      case 'placaMae':
        return (
          <div>
            <div className={styles.homeContainer}>

              <div className={styles.Conteudo}>
                <QuadradosUnicosContainer dados={partsData} quadradosPorLinha={5} onPecaSelect={handlePecaSelect} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa
                    onSelect={() => handleComponentSelect('processador')}
                    isSelected={selectedComponent === 'processador'}
                  ></BotaoProxEtapa>
                  <SelectedPecas selectedPecas={selectedPecas} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'processador':
        return (
          <div>
            <div className={styles.homeContainer}>
              <div className={styles.Conteudo}>
                <QuadradosUnicosContainer dados={partsData} quadradosPorLinha={5} onPecaSelect={handlePecaSelect} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa
                    onSelect={() => handleComponentSelect('memoria')}
                    isSelected={selectedComponent === 'memoria'}
                  ></BotaoProxEtapa>
                  <SelectedPecas selectedPecas={selectedPecas} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'memoria':
        return (
          <div>
            <div className={styles.homeContainer}>
              <div className={styles.Conteudo}>
                <QuadradosContainer dados={partsData} quadradosPorLinha={5} onPecaSelect={handlePecaSelect} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa
                    onSelect={() => handleComponentSelect('hd')}
                    isSelected={selectedComponent === 'hd'}
                  ></BotaoProxEtapa>
                  <SelectedPecas selectedPecas={selectedPecas} />
                </div>
              </div>
            </div>
          </div>
        );
      case 'hd':
        return (
          <div>
            <div className={styles.homeContainer}>
              <div className={styles.Conteudo}>
                <QuadradosContainer dados={partsData} quadradosPorLinha={5} onPecaSelect={handlePecaSelect} />
                <div className={styles.ComponentesLaterais}>
                  <BotaoProxEtapa></BotaoProxEtapa>
                  <SelectedPecas selectedPecas={selectedPecas} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.homeContainer}>
      <Header></Header>
      <CompNavbar />
      <div className={styles.navBar}>
        <PlacaMaeSelect
          onSelect={() => handleComponentSelect('placaMae')}
          isSelected={selectedComponent === 'placaMae'}
        ></PlacaMaeSelect>

        <ProcessadorSelect
          onSelect={() => handleComponentSelect('processador')}
          isSelected={selectedComponent === 'processador'}
        ></ProcessadorSelect>

        <MemoriaSelect onSelect={() => handleComponentSelect('memoria')} isSelected={selectedComponent === 'memoria'} />

        <HdSelect onSelect={() => handleComponentSelect('hd')} isSelected={selectedComponent === 'hd'}></HdSelect>
      </div>
      <div>{renderComponentContent()}</div>

      {/* Render the ConfirmationModal */}
      <ConfirmationModal open={isConfirmationModalOpen} handleClose={handleCloseModal} handleConfirm={handleConfirmModal} />
    </div>
  );
};

export default Home;
