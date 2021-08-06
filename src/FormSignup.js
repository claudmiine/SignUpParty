import React from 'react'
import { Form } from './Form';
import useForm from './useForm'

const FormSignup = () => {
    const { handleChange, values, handleSubmit} = useForm();
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
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
                        placeholder="Enter your first name"
                        value={values.firstname}
                        onChange={handleChange}
                    />
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
                        placeholder="Enter your last name"
                        value={values.lastname}
                        onChange={handleChange}
                    />
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
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />

                </div>
                <button className="form-imput-btn" type="submit">Sign up</button>
            </form>
        </div>
    )
}
export default FormSignup;