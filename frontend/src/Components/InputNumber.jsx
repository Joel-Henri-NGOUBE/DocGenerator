import React from 'react'

export default function InputNumber({ id, label, value, onChange }) {
  return (
    <> 
        <label htmlFor={id}>{label}</label>
        <input type="number" id={id} value={value} onChange={onChange}/>
    </>
  )
}