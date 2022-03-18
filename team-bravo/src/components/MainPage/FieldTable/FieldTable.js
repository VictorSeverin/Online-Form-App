import React from "react"
import "./FieldTable.css"

class FieldTable extends React.Component {
    testIndex = 0 // this is just for the dummy data

    constructor(props) {
        super(props)
        
        // for now create a local array of all the fields
        this.state = { fields: [] }
    }

    testHandleClick() {
        var fields = this.state.fields
        var f = {title: "Name " + this.testIndex, key: "name", type: "Text Field", required: true}

        fields.push(f)

        this.setState({fields: fields})

        console.log(this.state.fields)
        this.testIndex += 1
    }

    renderFields() {
        return this.state.fields.map(function(o, i) {
            return (
                <tr key={i}>
                    <td>{o.title}</td>
                    <td>{o.key}</td>
                    <td>{o.type}</td>
                    <td><input type="checkbox"></input></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="fieldtable" onClick={this.testHandleClick.bind(this)}>
                <button>Test Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Key</th>
                            <th>Type</th>
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderFields()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FieldTable