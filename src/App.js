import React from "react";
import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import GitHub from "./components/GitHub";
import LinkedIn from "./components/LinkedIn";
import Resume from "./components/Resume";
import Pomodoro from "./components/Pomodoro"
import DrumMachine from "./components/DrumMachine";
import Todo from "./components/Todo";



const App = (props) => {
    return (
        <>
            <div className="app-wrapper">
                <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/About/*" element={<About />} />
                        <Route path="/Projects/*" element={<Projects />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Route>

                    <Route path="/GitHub" element={<GitHub />} />
                    <Route path="/LinkedIn" element={<LinkedIn />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/pomodoro" element={<Pomodoro />}></Route>
                    <Route path="/DrumMachine" element={<DrumMachine />}></Route>
                    <Route path="/Todo" element={<Todo />}></Route>
                </Routes>
            </div >
            <p className='footer'>Copyright 2024 mJ Media 😎</p>
        </>
    )
}

export default App
