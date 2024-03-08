import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CV from './Components/Choices/CV';
import Quotation from './Components/Choices/Quotation';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Doc from './Pages/Doc';
import History from './Pages/History';
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

  const [token, setToken] = useState("")

  return (
    <div className="App">
      {/* {messages}
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
      </>} */}
    <Routes>

        <Route 
          path="/signup" 
          element={
          <SignUp 
            // token={token}
            signup={signup}
            setSignup={setSignup}
            setMessages={setMessages}
          />}
        />

        <Route 
          path="/login" 
          element={
          <Login 
            // token={token} 
            // setToken={setToken}
            login={login}
            setLogin={setLogin}
            setMessages={setMessages}
          />}
        />

        <Route 
          path="/" 
          element={
          <Doc
          />}
        />
        
        <Route 
          path="/history" 
          element={
          <History 
          />}
        />

    </Routes>
      
    </div>
  );
}


export default App;
