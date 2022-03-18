import React from "react"

class FieldTable extends React.Component {
    testIndex = 0 // this is just for the dummy data

    constructor(props) {
        super(props)
        
        // for now create a local array of all the fields
        this.state = { fields: [] }
    }

    render() {
        return (
            <div className="fieldtable">
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Required</th>
                    </thead>
                </table>
            </div>
        )
    }
}

export default FieldTable