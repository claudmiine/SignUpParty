import React from 'react'

export const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1> Get started with us today! Sign up for a party.</h1>
                <div className="form-inputs">
                    <label htmlFor="firstname" className="form-label">
                        First Name
                    </label>
                    <input
                        id="firstname"
                        type="text" 
                        name="firstname" 
                        className="form-input" 
                        placeholder="Enter your first name" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastname" className="form-label">
                        Last Name
                    </label>
                    <input
                        id="lastname"
                        type="text" 
                        name="lastname" 
                        className="form-input" 
                        placeholder="Enter your last name" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your email" />
                </div>
            </form>
        </div>
    )
}
