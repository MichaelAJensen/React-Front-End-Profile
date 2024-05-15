import React from 'react'
// import { connect } from "react-redux";
import { Link, Outlet, Route, Routes } from "react-router-dom"
// import GitHub from "../components/GitHub"
// import LinkedIn from "../components/LinkedIn"
import QuoteGenerator from './QuoteGenerator'
import MagicEightBall from './MagicEightBall';
import Pomodoro from "./Pomodoro"
import DrumMachine from './DrumMachine'
import Todo from './Todo';


const Projects = (props) => {
    return (
        <>
            <h1 className='projects-h1'>Projects. </h1>
            <div className="above-project-wrapper">
                <h1 className='h1-above-projects'>My early react/redux projects. </h1>
                <div className="projects   animate__animated  animate__zoomIn">
                    <div className='project-links'>
                        <nav className='project-nav-links' >
                            <li>
                                <Link
                                    className="profile-link" to="project1"><span>Pomodoro Clock</span></Link>
                            </li>

                            <li>
                                <Link
                                    className="profile-link" to="project4"><span>Drum Machine</span></Link>
                            </li>
                            <li>
                                <Link
                                    className="profile-link" to="project5"><span>Movie Watch Dog</span></Link>
                            </li>
                            
                            
                            <li>
                                <Link
                                    className="profile-link"
                                    to="project2"><span>Magic Eight Ball</span></Link>
                            </li>
                            <li>
                                <Link
                                    className="profile-link" to="project3"><span>Quote Generator</span></Link>
                            </li>
                        </nav>
                    </div>

                    <div className='project-grid-container animate__animated  animate__zoomIn'>
                        <Routes>
                            <Route path='project1' element={< Pomodoro />} />

                            <Route path='project2' element={< MagicEightBall />} />

                            <Route path='project3' element={< QuoteGenerator />} />

                            <Route path='project4' element={< DrumMachine />} />

                            <Route path='project5' element={< Todo />} />
                        </Routes>
                    </div>
                    <Outlet />
                </div>
            </div>



        </>
    )
}
export default Projects