import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../../firebase.confiq";
import SocialLogin from "../SocialLogin/SocialLogin";





const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  //   const [validated, setValidated] = useState(false);

  const handleFirstNameBlur = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameBlur = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisteredChange = (event) => {
    navigate('/login');
    setRegistered(event.target.checked);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password not match. Please enter the correct password.");
      return;
    }
    if (password.length < 8) {
      setError("Enter minimum 8 characters password.");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserName(firstName);
        navigate("/home");
        verifyEmail();
        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const updateUserName = (firstName) => {
    updateProfile(auth.currentUser, { displayName: firstName })
      .then(() => {})
      .catch((error) => {});
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email Verification is Sent");
    });
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div class="flex min-h-screen flex-col justify-center bg-cyan-500 p-16">
          <h1 class="text-3xl font-bold text-white text-center">{registered ? 'Login' : 'Sing Up'} 
         <span className="text-bold text-blue-800">Our Website</span>
          </h1>
          <p class="mb-8 font-semibold text-gray-700 text-center">
            And visit the Website.
          </p>
          <div class="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
            <div class="mb-4 grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label for="text" class="mb-2 font-bold text-black">
                  First Name:
                </label>
                <input
                  onBlur={handleFirstNameBlur}
                  type="text"
                  id="text"
                  class="w-full max-w-lg rounded-lg border-black border-[1px] px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40 text-black"
                  placeholder="first-name"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label for="text" class="mb-2 font-bold text-black">
                  Last Name:
                </label>
                <input
                  onBlur={handleLastNameBlur}
                  type="text"
                  id="text"
                  class="w-full max-w-lg rounded-lg border-black border-[1px] px-2 py-1 text-black hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
                  placeholder="last-name"
                />
              </div>
            </div>

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
                onBlur={handleConfirmPasswordBlur}
                type="password"
                id="age"
                placeholder="Enter Your Password"
                required
                class="w-full  rounded-lg border-[1px] border-black px-2 py-1 text-black hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              />
            </div>
            <div class="flex">
              <label for="privacy" class="mb-2 ">
                <input
                  onChange={handleRegisteredChange}
                  type="checkbox"
                  name="privcay"
                  id="privacy"
                  class="mr-2 peer w-0 h-0 text-center"
                />
                <h1 class="font-bold text-black text-center">
                  Are you already Registered? If you are registered then you
                  click the checkbox button and login the website. Thank You.
                </h1>
                <div class="w-6 h-6  border-black border-[2px] items-center inline-block justify-center hover:border-blue-500 focus:ring transition-all focus:ring-blue-500/40 rounded-lg peer-checked:bg-blue-500 peer-checked:[&>svg]:block [&>svg]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mx-auto text-black border-black text-center "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </label>
            </div>
            <div>
              <p className="text-red-700 text-bold text-2xl text-center">
                {error}
              </p>
            </div>
            <div>
              
               <div>
               <button 
                  className="border-black border-[1px] text-white bg-teal-900 w-32 rounded-lg h-10"
                  type="submit"
                >
                  {registered ? "Login" : "SingUp"}
                </button>
               </div>
               <div>
        <SocialLogin></SocialLogin>

               </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;