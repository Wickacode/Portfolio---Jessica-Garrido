import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/"> <span className='a01'>Accueil</span></Link>
            <Link to="/skills"> <span className='a02'>Skills</span></Link>
            <Link to="/portfolio"><span className='a03'>Portfolio</span></Link>
            <Link to="/contact"><span className='a04'>Contact</span></Link>
            </div>
    )
}