import React from "react";
import { SocialIcon } from "react-social-icons";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.confiq";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-red-500 font-semibold text-xl ">
          Error: {error?.message}
        </p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div className="pl-16 pr-16 pt-4">
      <div className="pt-4">
        <div className="flex justify-center border border-[2px solid] rounded-lg bg-green-900">
          <button className="h-16">
            <SocialIcon
              url="https://google.com/jaketrent"
              bgColor="black"
              fgColor="white"
            ></SocialIcon>
            <span className="text-lg text-white font-semibold">
              Google SignIn
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
