import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CV from './Components/CV';
import Quotation from './Components/Quotation';
// Quotation
function App() {
  const [select, setSelect] = useState("none")
  
  const dataShapeBoard = {
    title: "",
    description: "",
    quantity: "",
    unitPrice: "",
    tva: "",
  }

  const dataShape = {
    inputsData: {},
    dataBoard: [dataShapeBoard]
  }

  const [data, setData] = useState(dataShape)

  return (
    <div className="App">
      <select id="file" value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="none">...</option>
        <option value="quotation">Devis</option>
        <option value="cv">CV</option>
      </select>
      {select === "quotation" 
      ? 
      <Quotation
      data={data}
      dataShapeBoard={dataShapeBoard}
      setData={setData} 
      /> 
      : (select === "cv" && <CV />)}
    </div>
  );
}

export default App;
