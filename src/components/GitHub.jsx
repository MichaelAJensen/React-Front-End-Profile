import React from 'react'
import "../App.css"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import gitPic2 from "../assets/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d.png"




const GitHub = (props) => {
    return (
        <div>
            <h1>My future GitHub page</h1>
            <img src={gitPic2} alt="gitHub pic" className='gitHubPic'/>
            
        </div>
    )
}

export default GitHub