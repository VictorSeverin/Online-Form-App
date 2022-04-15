import React, { useContext } from 'react'
import { FieldContext } from '../Context/FieldContext'


export default function FinalForm() {

    const {finalElems} = useContext(FieldContext)

    function handleClick(){
        console.log(finalElems)
    }
  return (
    <div>
        {finalElems.map((item) => {
            return(
                <li> {item.title + " | Label: " + item.label}</li>
            )
        })}
    </div>
  )
}
