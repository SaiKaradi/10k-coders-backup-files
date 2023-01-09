import React from "react";
import "./LoginForm.css"


const LoginForm = () => {
    return ( 
        <div className="box">
            <div className="form">
                <form id="form" action="/">
                <h2>Sign In</h2>
                <div class="inputbox">
                    <input id="email"  type="text" ></input>
                    <span>Email</span>

                    <i></i>
                </div>
                <div class="inputbox">
                    <input id="password"  type="password"  />
                    <span>password</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href='#'>Forget Password</a>
                    <a href='#'>Signup</a>
                </div>
                <input type="submit" value="Login"></input>
              </form>
          </div>
        </div>


    )
}

export default LoginForm