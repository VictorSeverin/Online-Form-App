import React from 'react'
import Table from 'react-bootstrap/Table'
import './Bootstraptable.css';
import '../MainPage.css';
import TableRow from './tableRow';
import { SidebarData } from './Sidebardata';
import { Form } from 'react-bootstrap'
export default function Bootstraptable({data}) {
  return (
    <table>
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
        {data.map((elem) => {
            return(
                <tr key={elem.id}>
                    <TableRow data={elem}/>
                </tr>
            )
        })}
    </tbody>
  </table>
  )
}
