import React from 'react'
import InputLabel from './InputLabel'
import InputNumber from './InputNumber'
import InputDate from './InputDate'
import Board from './Board'

export default function Quotation({ data, setData, dataShapeBoard}) {
  return (
    <div>
        {/* <h2>Informations de l'entreprise</h2>
        <InputLabel
        id="name"
        label="Nom de l'entreprise"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="siren"
        label="Numéro SIREN"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="street"
        label="Rue et voie"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="zipcode"
        label="Code postal"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="city"
        label="Ville"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="country"
        label="Pays"
        value={""}
        onChange={""}
        />
        <InputNumber
        id="phone"
        label="Numéro de téléphone"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="mail"
        label="Adresse mail"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="site"
        label="Site Web"
        value={""}
        onChange={""}
        />
        <h3>Informations sur le client:</h3>
        <InputLabel
        id="name"
        label="Nom et prénom du client"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="street"
        label="Rue et voie"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="zipcode"
        label="Code postal"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="city"
        label="Ville"
        value={""}
        onChange={""}
        />
        <InputNumber
        id="phone"
        label="Numéro de téléphone"
        value={""}
        onChange={""}
        />
        <h3>Informations sur le devis</h3>
        <InputLabel
        id="validity"
        label="Durée de validité du devis"
        value={""}
        onChange={""}
        />
        <InputLabel
        id="sender"
        label="Nom du responsable envoyant ou de l'entreprise"
        value={""}
        onChange={""}
        />
        <InputDate
        id="performanceDate"
        label="Date de début des travaux"
        value={""}
        onChange={""}
        /> */}
        <Board 
        data={data}
        dataShapeBoard={dataShapeBoard}
        setData={setData}/>
    </div>
  )
}
