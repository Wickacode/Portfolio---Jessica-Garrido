import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/">Accueil</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            </div>
    )
}