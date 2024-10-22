import { useContext, useEffect } from "react";
import React, { useState } from 'react';
import { MyContext } from "../../App";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Login = () => {

    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHideSidebarandHeader(true);
    }, []);

    return (
        <section className="signIn">
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                                <a href="#" className="icon">
                                    <i className="fab fa-facebook-f"><FaFacebookF/></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-twitter"><FaTwitter/></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-google"><FaGoogle/></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-linkedin-in"><FaLinkedinIn/></i>
                                </a>
                            </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                                <a href="#" className="icon">
                                    <i className="fab fa-facebook-f"><FaFacebookF/></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-twitter"><FaTwitter/></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-google"><FaGoogle/></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-linkedin-in"><FaLinkedinIn/></i>
                                </a>
                            </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button type="button">Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of the site features</p>
                            <button className="hidden" onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of the site features</p>
                            <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;






