import React, { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import {AiOutlineGoogle} from 'react-icons/ai';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const {emailPassSignIn, emailPassSignUp, googleSignIn, updateUser} = useContext(authContext);
  const navigate = useNavigate();

  const handleEmailPassSignIn = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try{
      await emailPassSignIn(email, password);
      navigate("/");
      alert("Signed In Successfully");
    } catch(e) {
      console.log(e.message);
    }
  }
  const handleEmailPassSignUp = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const confirmPassword = e.target.confirmPassword.value;

    if(password !== confirmPassword) return;

    try{
      await emailPassSignUp(email, password);
      await updateUser(name, photourl)
      navigate("/");
      alert("Signed Up Successfully");
    } catch(e) {
      console.log(e.message);
    }
  }

  const handleGoogleSignIn = async(e) => {
    try{
      await googleSignIn();
      navigate("/");
      alert("Signed In Successfully");
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-center gap-3">
        <button className={`btn ${isSignIn ? "btn-primary" : "btn-outline"}`} onClick={() => setIsSignIn(true)}>
          Sign In
        </button>
        <button className={`btn ${!isSignIn ? "btn-primary" : "btn-outline"}`} onClick={() => setIsSignIn(false)}>
          Sign Up
        </button>
      </div>
      <div className="mt-5">
        {isSignIn ? (
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto border shadow-2xl bg-base-100">
            <h2 className='text-center text-5xl font-["olivera"] pt-5'>
              Sign In
            </h2>
            <form className="card-body" onSubmit={handleEmailPassSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto border shadow-2xl bg-base-100">
            <h2 className='text-center text-5xl font-["olivera"] pt-5'>
              Sign Up
            </h2>
            <form className="card-body" onSubmit={handleEmailPassSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Passowrd</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Confirm Passowrd"
                  name="confirmPassword"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Photo URL"
                  className="input input-bordered"
                  name="photourl"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="max-w-sm mx-auto">
      <div className="divider">OR</div>
      <button className="flex justify-center items-center gap-3 w-full  btn btn-neutral" onClick={handleGoogleSignIn}><AiOutlineGoogle size={30}/><span>Sign In with Google</span></button>
      </div>
    </div>
  );
};

export default SignIn;
