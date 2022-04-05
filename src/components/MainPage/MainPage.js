import React from "react";
import FieldTable from "./FieldTable/FieldTable"
import './FieldTable/Bootstraptable.css';
import Bootstraptable from "./FieldTable/Bootstraptable"
/*
function EmptyTable() {
    return(
        <div className="emptytable--shape">
            <img src="assets/circle-plus-solid.png" className="emptytable--icon"/>
            <p className="emptytable--text">Please add an Element</p>
        </div>
    )
}
*/

function MainPage({data}) {
    return(
        <div className="mainpage">
            {/* <div className="wrapper">
                <h1>Welcome</h1>
                <h2>to Team Bravo's Web Form Generator</h2>
            </div> */}
            <div className="table-wrapper">
                <div className="table-component">
                    <Bootstraptable data={data}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;