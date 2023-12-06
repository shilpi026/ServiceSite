import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { User } from '../../context/contextfile'
import './login.scss'
const Login = () => {
    const { modal } = useContext(User)
    const initialValues = { email: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setformErrors] = useState({})
    const [isSubmit, setisSubmit] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })


        // console.log(formValues)

    }
    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit])
    const handleSubmit = (e) => {
        e.preventDefault()
        setformErrors(validate(formValues))
        setisSubmit(true)
    }
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required"
        } else if (!regex.test(values.email)) {
            errors.email = "Not a valid email"
        }
        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters"
        }
        console.log(errors)
        return errors;
    };
    return (<>
        <div className={modal ? 'login_page show' : 'login_page'}>


            <div className="login_page_container">
                <div className="right_main">


                    <div className="login_form">
                        {Object.keys(formErrors).length === 0 && isSubmit ? <p>Signed in</p> : ""}
                        <div className="heading"> <h1>Login to your account </h1>
                            <p>See what is going on in game world</p>
                        </div>
                        <p className='google'><span className='icon'></span>Continue with google</p>
                        <p className='before_input'>----or Sign in with Email----</p>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" >Email/Number</label>
                            <input type="text" id="email" placeholder='xyx@gmail.com/123XXX' name='email' onChange={handleChange} />
                            <p>{formErrors.email}*</p>
                            <label htmlFor="password">Passowrd</label>
                            <input type="password" id="password" placeholder='Password' name='password' onChange={handleChange} />
                            <p>{formErrors.password}*</p>
                            <div className="checkbox"><span> <input type="checkbox" id="checkbox" /><label htmlFor="checkbox" >Remember me</label></span>
                                <a href="/#">Forgot Password?</a>
                            </div>

                            <button onClick={handleSubmit}>Login</button>
                        </form>
                        <br />
                        <p className='last_p'>Not Registered Yet? <span>Create an account</span>  </p>
                    </div>

                </div>
            </div>

        </div>

    </>
    )
}

export default Login