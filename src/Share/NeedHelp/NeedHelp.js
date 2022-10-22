import React from "react";
import { useNavigate } from "react-router-dom";
import contact from "../../images/contact.svg";
import faceSmile from "../../images/faceSmile.svg";
import message from "../../images/message.svg";
import "./NeedHelp.css";

const NeedHelp = () => {

  const navigate = useNavigate();

  const handleOurContact = () =>{
    navigate('/contact');
  }
  const handleShowAbout = () =>{
    navigate('/about');
  }
  const handleAddFurom = () =>{
    navigate('/forum');
  }



  return (
    <div className="bg-img m-2 rounded-sm">
      <div className="pt-20">
        <h1 className="text-center font-bold italic text-6xl">Need Help?</h1>
        <p className="text-3xl font-bold italic text-center pt-4">
          If you Want !!!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 pt-12 pb-8">
        <div className="flex bg-white rounded-sm">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={contact} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              Contact Us
            </h1>
            <p className="text-sm font-bold italic text-start text-emerald-600">
              Diam platea nisi proin taciti laoreet consequat curabitur
            </p>
            <div className="pt-2 pb-2">
              <button onClick={handleOurContact} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                Visit Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={faceSmile} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              About Us
            </h1>
            <p className="text-sm font-bold italic text-start text-emerald-600">
              Diam platea nisi proin taciti laoreet consequat curabitur
            </p>
            <div className="pt-2 pb-2">
              <button onClick={handleShowAbout} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                Visit Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={message} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              Forum
            </h1>
            <p className="text-sm font-bold italic text-start text-emerald-600">
              Diam platea nisi proin taciti laoreet consequat curabitur
            </p>
            <div className="pt-2 pb-2">
              <button onClick={handleAddFurom} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                Visit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
