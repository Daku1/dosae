import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    color: #eae5e1;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: inline-block;
    position: absolute;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;
    top: 5px;
    color: #fff;
    right: 0;
    cursor: pointer;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(FaBars)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`
