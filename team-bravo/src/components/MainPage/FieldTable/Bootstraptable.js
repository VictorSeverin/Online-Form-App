import React from 'react'
import './Bootstraptable.css';
import '../MainPage.css';
import TableRow from './tableRow';

export default function Bootstraptable({data}) {
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
      <tbody>
          <TableRow data={data}/>
      </tbody>
      {/* <button className='btn btn-primary'>Save</button> */}
    </table>
  </div>
  )
}
