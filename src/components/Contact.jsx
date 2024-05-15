import React from 'react'
import { connect } from "react-redux";
import { Link, Outlet, Route } from "react-router-dom"

const Contact = (props) => {
    return (
        <>
            <h1 className='contact-me'>Contact Me. </h1>
            <div className='above-contact-wrapper'>
                <h1 className='contact-h1 '>Send me a message.</h1>
                <div className='contact animate__animated  animate__zoomIn'>
                    <h1 className='enter-info-h1'>Enter your contact info please.</h1>
                    <form className='contact-form '
                    // onSubmit={this.handleLogin}
                    >
                        {/* <div className='outer-input-div'> */}
                        <input
                            className="contact-inputs"
                            // onInput={this.props.handleInput}
                            // value={this.props.username}
                            name='firstname'
                            type="text"
                            placeholder='First Name'
                            required
                        />
                        <input
                            className="contact-inputs"
                            // onInput={this.props.handleInput}
                            // value={this.props.password}
                            name='lastname'
                            type="text"
                            placeholder='Last Name'
                            required />
                        <input
                            className="contact-inputs"
                            // onInput={this.props.handleInput}
                            // value={this.props.username}
                            name='email'
                            type="text"
                            placeholder='E-mail'
                            required
                        />
                        <input
                            className="contact-inputs"
                            // onInput={this.props.handleInput}
                            // value={this.props.password}
                            name='message'
                            type="text"
                            placeholder='Message'
                            required />
                        {/* </div> */}

                        <button className='contact-button' type="submit" >
                            <span>Send</span>
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default connect(null, null)(Contact);