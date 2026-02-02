import React from "react"
import psuLogo from '../assets/psu_logo.png'
import './NavBar.css'
import { Link } from "react-router-dom"

export const NavBar = () => {
    return <nav class = "topnav">
        <ul>
            <li class="linkitem"><Link to="/contact">Contact</Link></li>
            <li class="linkitem"><Link to="/events">Events</Link></li>
            <li><Link to="/"><img id="logo" src={psuLogo} alt="PSU logo"/></Link></li>
            <li class="linkitem"><Link to="/board">Board</Link></li>
            <li class="linkitem"><Link to="/statements">Statements</Link></li>
        </ul>
    </nav>
}