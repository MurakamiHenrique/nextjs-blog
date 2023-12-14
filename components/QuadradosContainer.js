// components/QuadradosContainer.js
import { useState, useEffect, useRef } from 'react';
import Quadrado from './Quadrado';
import styles from '../styles/QuadradosContainer.module.css'; // Importe o arquivo CSS


const QuadradosContainer = ({ dados, onPecaSelect }) => {
  const [quadradoSelecionado, setQuadradoSelecionado] = useState(null);
  const containerRef = useRef(null);

  const handleQuadradoClick = (index) => {
    setQuadradoSelecionado(index === quadradoSelecionado ? null : index);
  };
  
  const calcularQuadradosPorLinha = () => {
    if (containerRef.current) {
      const larguraContainer = containerRef.current.clientWidth;
      const espacamentoHorizontal = 10; // Espaçamento horizontal entre os quadrados
      const larguraQuadrado =
        dados.length > 0 ? containerRef.current.children[0].children[0].clientWidth : 0;

      return Math.floor((larguraContainer + espacamentoHorizontal) / (larguraQuadrado + espacamentoHorizontal));
    }
    return 1; // Pelo menos um quadrado por linha
  };

  const [quadradosPorLinha, setQuadradosPorLinha] = useState(1);
  
  useEffect(() => {
    setQuadradosPorLinha(calcularQuadradosPorLinha);
  }, [dados, calcularQuadradosPorLinha]);

  const linhas = [];

  // Divide os dados em linhas com base na quantidade de quadrados por linha
  for (let i = 0; i < dados.length; i += quadradosPorLinha) {
    linhas.push(dados.slice(i, i + quadradosPorLinha));
  }

  return (
    <div ref={containerRef} className={styles.quadradosContainer}>
      {linhas.map((linha, linhaIndex) => (
        <div key={linhaIndex} className={styles.linha}>
          {linha.map((item, index) => (
            <div key={index} className={styles.quadradoContainer}>
              <Quadrado
                dados={item}
                isSelected={index + quadradosPorLinha * linhaIndex === quadradoSelecionado}
                onPecaSelect={onPecaSelect} 
                onClick={() => handleQuadradoClick(index + quadradosPorLinha * linhaIndex)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
  
  export default QuadradosContainer;