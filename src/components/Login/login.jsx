import React from 'react'
import "./login.css"
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpeg';

const Login = () => {
  return (

    <>
      <div className="main-container">
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        {/* NAVBAR TO GO AT HOME */}
        <nav className="navbar-container">
          <ul className="navbar">
            <li className="navbar-home">
              <NavLink to="/" > Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* LOGIN AUTHENTICATION*/}
      <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">Login</h2>
          <form>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="password" name="">Password</label>
              <input id="password" type="password" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Login
            </button>

            <button type="button" className="btn btn-secondary btn-cancel">
              Cancel
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login;