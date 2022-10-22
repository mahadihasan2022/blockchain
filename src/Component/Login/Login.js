import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.confiq";
import SocialLogin from "../SocialLogin/SocialLogin";
// import SocialLogin from "../../Share/SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (password !== confirmPassword) {
        setError("");
        return;
      }
      if (password.length < 8) {
        setError("Enter minimum 8 characters password.");
        return;
      }
  };
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("email sent");
    });
  };

  return (
    <div>
      <form onSubmit={handleUserSignIn}>
        <div class="flex min-h-screen flex-col justify-center bg-cyan-500 p-16">
          <h1 class="text-3xl font-bold text-white text-center">
            Login
            <span className="text-bold text-blue-800">Our Website</span>
          </h1>
          <p class="mb-8 font-semibold text-gray-700 text-center">
            And login our website.
          </p>
          <div class="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
            <div class="mb-4 flex flex-col">
              <label for="email" class="mb-2 font-bold text-black">
                Email address
              </label>
              <div class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-2 top-2 h-5 w-5 text-slate-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  onBlur={handleEmailBlur}
                  type="email"
                  placeholder="gamil.com"
                  required
                  id="text"
                  class="w-full rounded-lg border-black border-[1px] px-2 py-1 pl-8 text-black hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
                />
              </div>
            </div>
            <div class="mb-4 flex flex-col">
              <label for="age" class="mb-2 font-bold text-black">
                Password:
              </label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                id="age"
                placeholder="Enter Your Password"
                required
                class="w-full  rounded-lg border-[1px] border-black px-2 py-1 text-black hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              />
            </div>
            <div class="mb-4 flex flex-col">
              <label for="age" class="mb-2 font-bold text-black">
                Confirm Password:
              </label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                id="age"
                placeholder="Enter Your Password"
                required
                class="w-full  rounded-lg border-[1px] border-black px-2 py-1 text-black hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              />
            </div>
            <div>
              <p className="text-red-700 text-bold text-2xl text-center">
                {error}
              </p>
            </div>
            <div className="flex justify-between w-full pl-16 pr-16">
              <div>
                <button
                  className="border-black border-[1px] text-black bg-teal-900 rounded-lg text-white w-32 h-10"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div>
                <button onClick={handlePasswordReset}
                  className="border-black border-[1px] text-black bg-teal-900 rounded-lg text-white w-32 h-10"
                  type="submit"
                >
                  Forget Password
                </button>
              </div>
            </div>
            <div>
              
      <SocialLogin></SocialLogin>

            </div>
            <p className="text-center text-2xl font-bold text-black p-8">
              New to blockChain?
              <Link className="form-link text-cyan-500" to="/signup">
                Create Account..
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;