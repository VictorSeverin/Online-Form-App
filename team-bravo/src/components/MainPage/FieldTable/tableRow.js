import React from 'react'
import { useState } from 'react'
export default function (data) {
  const [id,setId] = useState(0);
  const handleClick = () =>{
    console.log(data.data)
  }
  return (
    <>
        <td onClick={handleClick}>{data.data.title}</td>
        <td>{data.data.label}</td>
        <td>{data.data.placeholder}</td>
        <td>{data.data.required}</td>
        <td>Edit</td>
    </>
  )
}
