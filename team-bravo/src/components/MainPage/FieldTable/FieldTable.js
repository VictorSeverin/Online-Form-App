import React, { useContext } from 'react'
import './FieldTable.css';
import '../MainPage.css';
import TableRow from './tableRow';
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom'
import { FieldContext } from '../../Context/FieldContext';

function FieldTable() {

  const {finalElems} = useContext(FieldContext)

  return (
    <div className='table-wrapper'>
    <table className='boottable'>
      <thead>
        <tr className='tablehead'>
          <th>Type</th>
          <th>Label</th>
          <th>Placeholder</th>
          <th>Required</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='conditional-body'>
        {finalElems.map((elem,index) =>
          <tr key={index}>
            <TableRow element={elem} i={index} />
          </tr>
        )}
      </tbody>
      <Link to="/form">
        <button className='btn btn-primary save-btn'>Save</button>
      </Link>
    </table>
  </div>
  )
}

export default FieldTable;