import React from "react";
import './Login.css'
function Login() {
    return (
        <div className="main bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className="mb-3">LoginForm</h2>
                 <form className="needs-validation">
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="from-control" required></input>
                        <div className="invalid-feedback">
                            please enter you email
                        </div>
                    </div>
                    <div className="form was-validated mb-2">
                        <label htmlFor="password" className="form-label">password</label>
                        <input type='password' className="form-control"required></input>
                        <div className="invalid-feedback">
                            please enter you email
                        </div>
                    </div>
                    <div className="form  form-check mb-2">
                        <input type="checkbox" className="form-check-input"></input>
                        <label htmlFor="check" className="form-check-label">Terms And Conditions </label>

                    </div>
                    <button type="submit" className="btn btn-success block mt-4">SIGN IN</button>
                </form>
            </div>

        </div>
    )
}
export default Login
