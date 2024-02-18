import React from 'react'

function TR({ index, data, setData }){
    return(
        <tr>
            <td><input type="text" id="title" value={data.dataBoard[index].title} onChange={(e) => setData({...data, dataBoard: [...data.dataBoard.map((element, index2) => index === index2 ? {...element, title: e.target.value} : element)]})}/></td>
            <td><input type="text" id="description" value={data.dataBoard[index].description} onChange={(e) => setData({...data, dataBoard: [...data.dataBoard.map((element, index2) => index === index2 ? {...element, description: e.target.value} : element)]})}/></td>
            <td><input type="number" id="quantity" value={data.dataBoard[index].quantity} onChange={(e) => setData({...data, dataBoard: [...data.dataBoard.map((element, index2) => index === index2 ? {...element, quantity: e.target.value} : element)]})}/></td>
            <td><input type="number" id="unitPrice" value={data.dataBoard[index].unitPrice} onChange={(e) => setData({...data, dataBoard: [...data.dataBoard.map((element, index2) => index === index2 ? {...element, unitPrice: e.target.value} : element)]})}/></td>
            <td><input type="number" id="tva" value={data.dataBoard[index].tva} onChange={(e) => setData({...data, dataBoard: [...data.dataBoard.map((element, index2) => index === index2 ? {...element, tva: e.target.value} : element)]})}/></td>
        </tr>
    )
}

export default function Board({ data, setData, dataShapeBoard }) {
  return (
    <div>
        <thead>
            <th>Titre</th>
            <th>Description</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>TVA</th>
        </thead>
        {console.log(data)}
        <tbody>
            {
            data.dataBoard.map((element, index) => 
                <TR 
                index={index}
                data={data}
                setData={setData}
                />
            )}          
        </tbody>
        <button onClick={() => setData({...data, dataBoard: [...data.dataBoard, dataShapeBoard]})}>Ajouter une ligne</button>
    </div>
  )
}
