import React from 'react'
import { SidebarData } from './Sidebardata';
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import '../Sidebar/sidebar.css'

export default function Sidebar(){
    return(
        <>
            <nav className='nav-menu'>
                <div className='sidebar-title'>
                    <h2>Team bravo</h2>
                </div>
                <form className='sidebar-search'>
                    <input type="text" name = "name" placeholder="Search" class = "input" />
                </form>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item,id) => {
                        return(
                            <li key = {id} className='sidebar-elem'>
                                <span>{item.title}</span>
                                <IoIcons.IoMdAddCircleOutline />
                             </li>
                        )
                    })}
                </ul>
                <div className='sidebar-footer'>
                    <h3>B</h3>
                    <p>User</p>
                    <FiIcons.FiLogOut />
                </div>
            </nav>
        
        </>
    )
}