import React from 'react'
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";


const Navbar = () => {
    const state = useSelector((state) => state.handleCart)

    // console.log(state, "asdf")

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">collections</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                        <div className="buttons">
                            <Link to="/login" className="bth btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login</Link>
                            <Link to="/register" className="bth btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</Link>
                            <Link to="/cart" className="bth btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>cart({state.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar