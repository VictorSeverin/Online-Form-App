import React from "react";
import './FieldTable/Bootstraptable.css';
import Bootstraptable from "./FieldTable/Bootstraptable"

function MainPage({data}) {
    return(
        <div className="mainpage">
            <h1>Welcome</h1>
            <h2>to Team Bravo's Web Form Generator</h2>
            <div className="table-wrapper">
                <div className="table-component">
                    <Bootstraptable data={data}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;