import {BarChart, ChartTitle} from '@mui/x-charts/BarChart';
import Header from "../components/headerRelatorio";
import styles from "../styles/Inicio.module.css";

const Relatorio = () => {
  
    <style jsx>{`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
  `}</style>;
  return (
    <div className={styles.body}>
    <Header></Header>
    <div style={{ display: 'flex' }}>
<BarChart
  xAxis={[{ scaleType: 'band', data: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5'] }]}
  series={[{ data: [4, 3, 5, 2, 4] , color:'#8884d8', label:'Vendas de Janeiro'}]}
  width={500}
  height={300}
/>
<BarChart
  xAxis={[{ scaleType: 'band', data: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5'] }]}
  series={[{ data: [4, 6, 10, 1,20], color:'#82ca9d',label:'Vendas de Fevereiro' }]}
  width={500}
  height={300}
/>
<BarChart
  xAxis={[{ scaleType: 'band', data: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5'] }]}
  series={[{ data: [4, 3, 5,5,15], color:'#ffc658', label:'Vendas de Março' }]}
  width={500}
  height={300}
/>
<BarChart
  xAxis={[{ scaleType: 'band', data: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5'] }]}
  series={[{ data: [4, 8, 8,8, 7], label:'Vendas de Abril' }]}
  width={500}
  height={300}
/>
</div>
    </div>
  );
};
export default Relatorio;