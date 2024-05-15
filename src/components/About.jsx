import React from 'react'

import { Link, Outlet, Route, Routes } from "react-router-dom"
import GitHub from "../components/GitHub"
import LinkedIn from "../components/LinkedIn"
import Resume from "../components/Resume";


const About = (props) => {
    return (
        <>
            <h1 className='about-h1'>About.</h1>
            <div className='about-wrapper '>
                <h1 className='h1-above-grid'>Full-stack web developer since 2023.</h1>
                <div className="about animate__animated  animate__zoomIn">

                    <h1 className='about-info'> I am a full-stack web developer from Chicago, IL and currently working out of sunny Phoenix, Arizona I am a family man who loves the outdoors and am an avid sports fan.</h1>

                    <div
                        className='about-grid-container 
                     animate__animated  animate__zoomIn
                    '>
                        <h1 className='container-h1'>If you would like more info on my professional background, please visit my links:</h1>
                        <nav>
                            <ul>
                                <li><Link className="profile-link p-tag" to="/Resume">My Resume</Link></li>
                                <li><Link
                                    className="profile-link" to="/GitHub"><p className='fab fa-github p-tag'></p></Link></li>
                                <li><Link className="profile-link" to="/LinkedIn"><p className='fab fa-linkedin p-tag'></p></Link></li>
                            </ul>
                        </nav>
                    </div>


                    <Outlet />

                </div>
            </div>
        </>

    )
}

export default About;



