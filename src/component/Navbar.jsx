import React from 'react';
import './Navbar.css'; // Import local styles for Navbar
import logo from '../assets/loadersdozers-1@2x.png';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="custom-navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={logo} width="283" height="97" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Equipment
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service areas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resources
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FaMapMarkerAlt /> (888) 325-5172</a>
                        </li>
                        <li className="nav-item-1">
                        <button className="btn btn-outline-primary rounded-pill mr-3">Sign In</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FaSearch /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FaShoppingCart /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
