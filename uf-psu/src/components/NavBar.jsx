import React from "react"
import psuLogo from '../assets/psu_logo.png'
import './NavBar.css'
import { Link } from "react-router-dom"

export const NavBar = () => {
    return <nav>
        <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/"><img id="logo" src={psuLogo} alt="PSU logo"/></Link></li>
            <li><Link to="/board">Board</Link></li>
            <li><Link to="/statements">Statements</Link></li>
        </ul>
    </nav>
}