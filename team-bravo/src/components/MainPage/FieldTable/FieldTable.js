import React, { useContext, useState,useEffect } from 'react'
import './FieldTable.css';
import '../MainPage.css';
import TableRow from './TableRow';
import * as IoIcons from "react-icons/io";
import { FieldContext } from '../../Context/FieldContext';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function FieldTable() {

const {finalElems} = useContext(FieldContext)
let {id} = useParams();
let navigate = useNavigate();


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
        <button className='btn btn-primary save-btn' onClick={() => navigate(`/finalform/${id}`)}>Generate Form</button>
    </table>
  </div>
  )
}

export default FieldTable;