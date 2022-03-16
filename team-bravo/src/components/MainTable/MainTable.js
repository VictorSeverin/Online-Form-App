import React from "react";
import './MainTable.css';

function EmptyTable() {
    return(
        <div className="emptytable--shape">
            <img src="assets/circle-plus-solid.png" className="emptytable--icon"/>
            <p className="emptytable--text">Please add an element</p>
        </div>
    )
}

function MainTable() {
    return(
        <div className="maintable">
            <h1>Welcome</h1>
            <h2>to Team Bravo's Web Form Generator</h2>
            <EmptyTable />
        </div>
    )
}

export default MainTable;