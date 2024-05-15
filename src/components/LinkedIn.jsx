import React from 'react'
import "../App.css"
import linkedInPic2 from "../assets/5bbc4e9c65a24-8fec274fdc652cc55481fb5afc7330da.png"

const LinkedIn = (props) => {
    return (
        <div>

            <h1>My future LinkedIn page</h1>
            <br />
             <img src={linkedInPic2} 
                className='linkedinpic' />
        </div>
    )
}




export default LinkedIn