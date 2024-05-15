import React from 'react'
import { connect } from "react-redux";
import { Link, Outlet, Route } from "react-router-dom"
import all3 from "../assets/5bbe714734f6c-b696729d4425748924bc5a3c191f6ea2 (1).png"
import htmlPic from "../assets/5bbc10adc0011-1119a94888dbdb539e896320b921781f.png"
import cssPic from "../assets/5b29d22ed1933-5ab8d0f3324cd44fb7cd61f5ac7ab341.png"
import jsPic from "../assets/javascript-ecmascript-computer-software-front-and-back-ends-tutorial-txt-file-d1ea8b336ac026414fa432233165edd2.png"
import reactPic from "../assets/react-computer-icons-redux-javascript-others-b6211984dfc302b596aefcf69184f739.png"
import bootstrapPic from "../assets/bootstrap-responsive-web-design-web-development-logo-django-others-d7ec880588af75918aa8bc2ad69bd1a4 (1).png"
import jqueryPic from "../assets/jquery-ui-javascript-web-browser-pasargad-c45f10f2a264b787ee840ee30c248874.png"
import mongoPic from "../assets/database-logo-brand-product-design-computer-mongo-db-eedee8a7bee03b85a3c143ba84c69264.png"
import expressPic from "../assets/express-js-node-js-javascript-session-web-application-others-aa2636ca46206cc4b80a6136cac3fdd5.png"


const Home = (props) => {
    return (
        <div className='home'>
            <h1 className='home-h1'>Michael Jensen / Software Engineer.</h1>
            <br />
            <div className=' '>
                <div className='exp-wrapper'>
                    <h1 className='h1-above-grid'>My Fullstack Developer Tools.</h1>
                    <div className='grid-container animate__zoomIn animate__animated'>

                        <p classname=' '><img src={htmlPic} alt="html5 pic" className='html-pic ' />
                            <br /><span className='home-span'>html5</span></p>

                        <p><img src={cssPic} alt="css3 pic " className='css-pic ' /><br /><span className='home-span'>css3</span></p>

                        <p><img src={jsPic} alt="javaScript pic" className='js-pic' /><br /><span className='home-span'>javaScript</span></p>

                        <p><img src={reactPic} className='react-pic' /><br /><span className='home-span'>react/redux</span></p>

                        <p><img src={bootstrapPic} className='bootstrap-pic' /><br /><span className='home-span'>bootstrap</span></p>

                        <p><img src={jqueryPic} className="jquery-pic" /><br /><span className='home-span'>jQuery</span>
                        </p>

                        <p><img src={mongoPic} className="mongo-pic" /><br /><span className='home-span'>mongoDB</span></p>

                        <p><img src={expressPic} className="express-pic" /><br /><span className='home-span'>express.js</span></p>

                        <p><span className='home-span'>More references<br></br>
                            upon request</span></p>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home;