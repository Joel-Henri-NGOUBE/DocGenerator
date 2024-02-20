import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CV from './Components/CV';
import Quotation from './Components/Quotation';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
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
  
  const fields = {username: "", password: ""}

  const [login, setLogin] = useState(fields)
  
  const [redirect, setRedirect] = useState(false)

  const [signup, setSignup] = useState(fields)
  
  const [loggedIn, setLoggedIn] = useState(false)
  
  const [messages, setMessages] = useState(false)

  return (
    <div className="App">
      {messages}
      {
      !loggedIn 
      ? (!redirect ? <Login login={login} setLogin={setLogin} setRedirect={setRedirect} setLoggedIn={setLoggedIn} setMessages={setMessages}/> 
      : <SignUp signup={signup} setSignup={setSignup} setRedirect={setRedirect} setMessages={setMessages}/>) : <>
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
      </>}
    </div>
  );
}

export default App;
