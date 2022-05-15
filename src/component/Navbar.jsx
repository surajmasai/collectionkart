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

                    <Link className="navbar-brand" to="/">
                        <img src="apple-touch-icon.png" alt="logo" width="30" />
                        collectionKart</Link>
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

                        <form class="d-flex input-group w-auto me-4">
                            <input
                                type="search"
                                class="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span class="input-group-text text-white border-0" id="search-addon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </form>
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