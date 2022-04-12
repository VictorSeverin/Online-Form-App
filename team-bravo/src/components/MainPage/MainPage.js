import React from "react";
import FieldTable from "./FieldTable/FieldTable"
import * as IoIcons from "react-icons/io";
import {useState} from "react"
function MainPage({data}) {
    const [elems,setElems] = useState(data)
    const handleClick = () =>{
        console.log(data.lenght);
    }
    return(
        <div className="mainpage">
            <h1>Welcome</h1>
            <h2>to Team Bravo's Web Form Generator</h2>
            <div className="table-wrapper">
                <div className="table-component">
                    {data ? (
                        <FieldTable data={data}/>
                    ) : (
                    <div className="optional-message"> 
                        <IoIcons.IoMdAddCircleOutline className="table-svg" onClick={handleClick}/>
                        <p>No Elements to show</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainPage;