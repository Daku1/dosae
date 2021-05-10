import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Dosaeria</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
