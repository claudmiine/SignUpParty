import React from 'react'

export const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1> Get started with us today! Sign up for a party.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        className="form-input" 
                        placeholder="Enter your username" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your email" />
                </div>
            </form>
        </div>
    )
}
