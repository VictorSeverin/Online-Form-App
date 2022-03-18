import React from "react";
import FieldTable from "./FieldTable/FieldTable"
import './MainPage.css';

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

function MainPage() {
    return(
        <div className="mainpage">
            <h1>Welcome</h1>
            <h2>to Team Bravo's Web Form Generator</h2>
            <div className="table-component">
                <FieldTable />
            </div>
        </div>
    )
}

export default MainPage;