 // components/CompNavbar.js
 import { useState } from 'react';
 import { useRouter } from 'next/router';
 
 const CompNavbar = () => {
   const router = useRouter();
   const [computers, setComputers] = useState(['Computador 1']);
   const [selectedComputer, setSelectedComputer] = useState('Computador 1');
 
   const handleAddComputer = () => {
     if (computers.length < 5) {
       const newComputer = `Computador ${computers.length + 1}`;
       setComputers([...computers, newComputer]);
     }
   };
 
   const handleRemoveComputer = () => {
     if (computers.length > 1) {
       const updatedComputers = [...computers];
       updatedComputers.pop();
       setComputers(updatedComputers);
       // Se o computador removido for o selecionado, atualize para o último da lista
       if (selectedComputer === computers[computers.length - 1]) {
         setSelectedComputer(computers[computers.length - 1]);
       }
     }
   };
 
   const handleComputerClick = (computer) => {
     setSelectedComputer(computer);
   };
 
   return (
     <nav>
       <div className="navbar-container">
         <div className="computers-list">
           {computers.map((computer, index) => (
             <div
               key={index}
               className={`computer ${selectedComputer === computer ? 'active' : ''}`}
               onClick={() => handleComputerClick(computer)}
             >
               {computer}
             </div>
           ))}
         </div>
         <div className="add-remove-computer">
           <div className="add-computer" onClick={handleAddComputer}>
             +
           </div>
           <div className="remove-computer" onClick={handleRemoveComputer}>
             -
           </div>
         </div>
       </div>
       <style jsx>{`
         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');
 
         nav {
           width: 70%;
           margin: 0 auto;
           padding: 10px 0;
           background-color: transparent; /* Fundo transparente */
         }
 
         .navbar-container {
           display: flex;
           justify-content: space-between;
           align-items: center;
         }
 
         .computers-list {
           display: flex;
           overflow-x: auto;
           gap: 10px;
           align-items: center; /* Alinhando ao centro verticalmente */
         }
 
         .computer {
           font-size: 16px;
           font-family: 'Nunito', sans-serif;
           color: #000000;
           background-color: #ffffff;
           border-radius: 16px;
           padding: 10px 20px;
           cursor: pointer;
         }
 
         .computer.active {
           background-color: #d692f6;
         }
 
         .add-remove-computer {
           display: flex;
           gap: 10px;
           align-items: center; /* Alinhando ao centro verticalmente */
         }
 
         .add-computer,
         .remove-computer {
           font-size: 14px;
           font-family: 'Nunito', sans-serif;
           color: #000000;
           background-color: #ffffff;
           border-radius: 50%;
           padding: 8px;
           cursor: pointer;
           width: 20px; /* Ajustando a largura */
           height: 20px; /* Ajustando a altura */
           display: flex;
           justify-content: center;
           align-items: center;
         }
       `}</style>
     </nav>
   );
 };
 
 export default CompNavbar;
 
 