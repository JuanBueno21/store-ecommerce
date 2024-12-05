import React from 'react'
import "./login.css"

const Login = () => {
  return (
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
  )
}

export default Login;