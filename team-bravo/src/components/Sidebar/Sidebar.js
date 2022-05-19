import React from 'react'
import { SidebarData } from './Sidebardata';
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import './sidebar.css'
import { useState } from 'react'
import userLogo from './profilepic.jpg'
import { Link } from 'react-router-dom';

export default function Sidebar({handleShow}){
    return(
        <div className='wrapper'>
            <nav className='nav-menu'>
                <div className='sidebar-title'>
                    <Link to="/form">
                        <h2>TeamBravo</h2>
                    </Link>
                </div>
                <form className='sidebar-search'>
                    <input type="text" name = "name" placeholder="Search" className = "input" />
                </form>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item,id) => {
                        return(
                            <li key = {id} className='sidebar-elem' onClick={() => handleShow(item.title)}>
                                <span>{item.title}</span>
                                <IoIcons.IoMdAddCircleOutline/>
                            </li>
                        )
                    })}
                </ul>
                <div className='sidebar-footer'>
                    <img src={userLogo} />
                    <p>Chad</p>
                    <FiIcons.FiLogOut />
                </div>
            </nav>
        </div>
    )
}