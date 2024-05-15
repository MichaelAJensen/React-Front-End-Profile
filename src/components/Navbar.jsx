import React from "react";
import "../App.css"
import { Link, Outlet } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu";
import { connect } from "react-redux";

const Navbar = () => {
    return (
        <>
            <div className="nav" >

                <Link to="/" className="link"> Home </Link>
                <Link to="/Projects/project1" className="link">Projects</Link>
                <Link to="/About" className="link">About</Link>
                <Link to="/Contact" className="link">Contact Me</Link>
                {/* <div className="app-pic-div">
                    <p className="logo">😎</p></div> */}
            </div>
            <Outlet />
        </>

    )
}

export default Navbar





