import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const SignUp = () => {
    const {setUser,signUpFunc}=useContext(AuthContext)
    const handleSignUp=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.photo.value
        signUpFunc(email,pass)
            .then(result=>{
                e.target.reset()
                setUser(result.user)
                const newUser={email,name,photo}
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(newUser)
                })
                    .then()
            })
            .catch(error=>{
                console.log(error)
            })
    }
  return (
    <div>
      <h1>Sign UP</h1>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form class="card-body" onSubmit={handleSignUp}>
        <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Your Name"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
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
              name='password'
              placeholder="password"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="Photo URL"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
