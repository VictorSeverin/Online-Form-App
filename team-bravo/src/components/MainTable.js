import React from "react"

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
        <>
            <h1 className="maintable--title">Welcome</h1>
            <h2 className="maintable--subtitle">to Team Bravo's Web Form Generator</h2>
            <EmptyTable />
        </>
    )
}

export default MainTable;