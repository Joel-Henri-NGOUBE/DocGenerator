import React from 'react'

export default function InputDate({ id, label, value, onChange }) {
  return (
    <> 
        <label htmlFor={id}>{label}</label>
        <input type="date" id={id} value={value} onChange={onChange}/>
    </>
  )
}