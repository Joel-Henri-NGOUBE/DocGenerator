import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CV from './Components/CV';
import Quotation from './Components/Quotation';
// Quotation
function App() {
  const [select, setSelect] = useState("none")
  
  const dataShapeBoard = {
    performanceTitle: "",
    performanceDescription: "",
    quantity: "",
    unitPrice: "",
    tva: ""
  }

  const inputsData = {
    company: {
      name: "",
      siren: "",
      street: "",
      zipcode: "",
      city: "",
      country: "",
      phone: "",
      mail: "",
      site: ""
    },
    client: {
      name: "",
      street: "",
      zipcode: "",
      city: "",
      phone: ""
    },
    quotation: {
      validity: "",
      sender: "",
      performanceDate: ""
    },
    wantsToSign: false
  }

  const dataShape = {
    inputsData: inputsData,
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
