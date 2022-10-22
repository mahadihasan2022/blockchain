import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import header from '../../images/header.svg';
import "./Header.css";
import Navber from "./Navber";

const Header = () => {
  return (
  <div>
      <div className="flex justify-between items-center pl-4 m-2 pr-4 bg-black h-10">
      <h1 className="pr-4 line text-white font-semibold italic">
        {moment().format("Do MMMM YYYY, h:mm:ss A")}
      </h1>
      <ul class="flex justify-start pr-30 items-center h-full menu menu-compact dropdown-content shadow  w-60 pr-22">
        <li className=" hover:bg-orange-300 text-white  hover:text-black p-2 rounded-lg">
          {" "}
          <Link
            to="/home"
            class="btn btn-ghost normal-case font-semibold italic"
          >
            Home
          </Link>
        </li>
        <li className=" hover:bg-orange-300 text-white  hover:text-black p-2 rounded-lg">
          {" "}
          <Link
            to="/about"
            class="btn btn-ghost normal-case font-semibold italic"
          >
            About
          </Link>
        </li>
      </ul>
      <div className=" pr-2 pl-2 text-white  hover:bg-orange-300 hover:text-black p-2 rounded-lg">
      <ul>
        <li>  <Link
          to="/signup"
          class="btn btn-ghost normal-case  font-semibold italic"
        >
          Sign Up
        </Link></li>
      </ul>
      </div>
    </div>
    <div className="header-img m-2">
        <img src={header} alt=""/>
    </div>
    <Navber></Navber>
  </div>
  );
};

export default Header;
