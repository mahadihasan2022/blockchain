import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.confiq";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import './Header.css';
const Navber = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };



  return (
    <header className="m-2 bg-white">
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" class="flex items-center">
            <span class="self-center text-3xl whitespace-nowrap text-black font-bold italic">
            Block Wizard
            </span>
          </a>
          <div class="flex items-center lg:order-2">
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to='/home'
                  class="block py-2 pr-4 pl-3 text-black rounded font-bold italic hover:bg-orange-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to='/services'
                  class="block py-2 pr-4 pl-3 text-black rounded font-bold italic hover:bg-orange-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to='/dash'
                  class="block py-2 pr-4 pl-3 text-black rounded font-bold italic hover:bg-orange-400"
                >
                  DashBoard
                </Link>
              </li>
              <li>
                <Link to='/blogs'
                  class="block py-2 pr-4 pl-3 text-black rounded font-bold italic hover:bg-orange-400"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to='/contact'
                  class="block py-2 pr-4 pl-3 text-black rounded font-bold italic hover:bg-orange-400"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                {user ? (
                  <button
                    className=" pt-2 font-bold italic btn btn-ghost normal-case text-md text-black rounded-lg"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                ) : (
                  <Link to="/login"></Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="lines">

      </div>
    </header>
  );
};
export default Navber;
