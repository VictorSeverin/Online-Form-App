import React from 'react'
import { SidebarData } from './Sidebardata'
//import * as IoIcons from "react-icons/io";

export default function Sidebar(){
    return(
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item,id) => {
                        return(
                            <li key = {id}>
                                {item.title}
                             </li>
                        )
                    })}
                </ul>
            </nav>
        
        </>
    )
}