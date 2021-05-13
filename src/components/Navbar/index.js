import React from 'react'
import { Nav, NavIcon, NavLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink className="title" to="/">Dosaeria</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <FaBars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
