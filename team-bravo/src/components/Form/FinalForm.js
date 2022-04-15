import React from 'react'


export default function FinalForm({data}) {
    function handleClick(){
        console.log(data)
    }
  return (
    <div>
        {data.map((item) => {
            return(
                <li> {item.title + " | Label: " + item.label}</li>
            )
        })}
    </div>
  )
}
