import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const SignIn = () => {
  const {setUser,loginFunc}=useContext(AuthContext)
  const handleLogin=e=>{
    e.preventDefault()
    const email=e.target.email.value
    const pass=e.target.password.value
    loginFunc(email,pass)
      .then(result=>{
        setUser(result.user)
      })
      .catch(error=>console.log(error))
  }
  return (
    <div>
      <div>
        <h1>Sign  In</h1>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body" onSubmit={handleLogin}>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                class="input input-bordered"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
 
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
