import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import "./Navbar.css";

export default function Navbar(){
    return(
        <div className='container'>
            <div className='wrapper'>
                <div className='sidebar-title'>
                    <h2>TeamBravo</h2>
                </div>
                <form className='navbar-search'>
                    <input type="text" name = "name" placeholder="Search" class = "input" />
                </form>
                <nav className='nav'>
                <div className='basic-elements'>
                    <MdIcons.MdArrowDropDownCircle />
                    <h3>Basic Elements</h3>
                </div>
                <ul className="nav-list">
                    <div className='elem'>
                        <li>Input</li>
                        <IoIcons.IoMdAddCircleOutline />
                    </div>
                    <div className='elem'>
                        <li>Text Area</li>
                        <IoIcons.IoMdAddCircleOutline />
                    </div>
                    <div className='elem'>
                        <li>Check Box</li>
                        <IoIcons.IoMdAddCircleOutline />
                    </div>
                    <div className='elem'>
                        <li>Radio Button</li>
                        <IoIcons.IoMdAddCircleOutline />
                    </div >
                    <div className='elem'>
                        <li>Select Menu</li>
                        <IoIcons.IoMdAddCircleOutline />
                    </div>
                </ul>
                <div className='basic-elements adv-elements'>
                    <MdIcons.MdArrowDropDownCircle />
                    <h3>Basic Elements</h3>
                </div>
                <ul className="nav-list ">
                    <li>Email</li>
                    <li>Email Confirm</li>
                    <li>Number</li>
                    <li>Password</li>
                    <li>Password Confirm</li>
                    <li>Currency</li>
                    <li>Toggle</li>
                </ul>
                </nav>
            </div>
        </div>
    )
}