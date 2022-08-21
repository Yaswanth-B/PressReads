import React from 'react'

function Auth() {
  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">
                    Sign In
                </h3>
                <div className="form-group mt-3">
                    <label >Email Address</label>
                    <input type="email" className="form-control mt-1" placeholder="Enter email" />
                </div>
                <div className="form-group mt-3">
                <label >Password</label>
                    <input type="password" className="form-control mt-1" placeholder="Enter password" />
                </div>
                <div className="d-grip gap-2 mt-3">
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">Password?</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Auth