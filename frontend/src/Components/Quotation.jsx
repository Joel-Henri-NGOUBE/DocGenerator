import React from 'react'
import InputLabel from './InputLabel'
import InputNumber from './InputNumber'
import InputDate from './InputDate'
import Board from './Board'

export default function Quotation({ data, setData, dataShapeBoard}) {
  const { company, client, quotation, wantsToSign } = data.inputsData
  return (
    <div>
        <h2>Informations de l'entreprise</h2>
        <InputLabel
        id="name"
        label="Nom de l'entreprise"
        value={company.name}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, name: e.target.value}}})}
        />
        <InputLabel
        id="siren"
        label="Numéro SIREN"
        value={company.siren}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, siren: e.target.value}}})}
        />
        <InputLabel
        id="street"
        label="Rue et voie"
        value={company.street}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, street: e.target.value}}})}
        />
        <InputLabel
        id="zipcode"
        label="Code postal"
        value={company.zipcode}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, zipcode: e.target.value}}})}
        />
        <InputLabel
        id="city"
        label="Ville"
        value={company.city}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, city: e.target.value}}})}
        />
        <InputLabel
        id="country"
        label="Pays"
        value={company.country}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, country: e.target.value}}})}
        />
        <InputNumber
        id="phone"
        label="Numéro de téléphone"
        value={company.phone}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, phone: e.target.value}}})}
        />
        <InputLabel
        id="mail"
        label="Adresse mail"
        value={company.mail}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, mail: e.target.value}}})}
        />
        <InputLabel
        id="site"
        label="Site Web"
        value={company.site}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, company: {...data.inputsData.company, site: e.target.value}}})}
        />
        <h3>Informations sur le client:</h3>
        <InputLabel
        id="name"
        label="Nom et prénom du client"
        value={client.name}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, client: {...data.inputsData.client, name: e.target.value}}})}
        />
        <InputLabel
        id="street"
        label="Rue et voie"
        value={client.street}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, client: {...data.inputsData.client, street: e.target.value}}})}
        />
        <InputLabel
        id="zipcode"
        label="Code postal"
        value={client.zipcode}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, client: {...data.inputsData.client, zipcode: e.target.value}}})}
        />
        <InputLabel
        id="city"
        label="Ville"
        value={client.city}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, client: {...data.inputsData.client, city: e.target.value}}})}
        />
        <InputNumber
        id="phone"
        label="Numéro de téléphone"
        value={client.phone}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, client: {...data.inputsData.client, phone: e.target.value}}})}
        />
        <h3>Informations sur le devis</h3>
        <InputLabel
        id="validity"
        label="Durée de validité du devis"
        value={quotation.validity}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, quotation: {...data.inputsData.quotation, validity: e.target.value}}})}
        />
        <InputLabel
        id="sender"
        label="Nom du responsable envoyant ou de l'entreprise"
        value={quotation.sender}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, quotation: {...data.inputsData.quotation, sender: e.target.value}}})}
        />
        <InputDate
        id="performanceDate"
        label="Date de début des travaux"
        value={quotation.performanceDate}
        onChange={(e) => setData({...data, inputsData: {...data.inputsData, quotation: {...data.inputsData.quotation, performanceDate: e.target.value}}})}
        />
        <Board 
        data={data}
        dataShapeBoard={dataShapeBoard}
        setData={setData}/>
        <label htmlFor="sign">Avez-vous besoin d'une signature ?</label>
        <select id="sign" value={wantsToSign ? "yes" : "no"} onChange={(e) => setData({...data, inputsData: {...data.inputsData, wantsToSign: !data.inputsData.wantsToSign}})}>
          <option value="yes">Oui</option>
          <option value="no">Non</option>
        </select>
        <button type="button">Visualiser</button>
        <button>Télécharger</button>    
        {/* {visualizeClicked ? <embed src="http://localhost:3250/getfile" width="800px" height="800px"/> : <></>} */}
        // for
    </div>
  )
}
