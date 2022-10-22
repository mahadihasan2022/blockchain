import React from "react";
import usersSolid from "../../images/usersSolid.svg";
import slack from "../../images/slack.svg";
import nfc from "../../images/nfc.svg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleOnclick = () =>{
    navigate('/questionBox');
  }
  const HandleClickPrestigious = () =>{
    navigate('/prestigious');
  }
  const handleOnclickCummunity = () =>{
    navigate('/community');
  }



  return (
    <div className="m-2 bg-slate-900 rounded-sm pb-8">
      <div className="">
        <div className="grid grid-cols-2">
          <div className="pt-16 pb-16">
            <h1 className="text-white text-3xl font-bold italic text-center pt-8">
              {" "}
              The Most
            </h1>
            <h2 className="text-yellow-300 text-2xl font-bold italic text-center">
              Interesting Digital
            </h2>
            <h3 className="text-orange-300 text-2xl font-bold italic text-center pb-20">
              {" "}
              In The World.
            </h3>
          </div>
          <div className="pt-20 pb-16">
            <p className="text-sm text-start font-bold italic text-white">
              Blandit semper ac mi montes neque nostra vivamus dictum
              ullamcorper phasellus. Gravida metus viverra massa netus tortor
              nullam pharetra. Nunc leo auctor congue mus convallis scelerisque
              maecenas condimentum dictum dolor.
            </p>
            <div className="pt-4">
              <button className="w-32 rounded-sm font-bold italic h-8 bg-green-500 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex bg-white rounded-sm">
            <div className="pl-10">
              <img className="pt-10 pr-2 w-16" src={usersSolid} alt="" />
            </div>
            <div className="pt-8 pl-2">
              <h1 className="text-2xl font-bold italic text-start text-black">
                Fantastic support
              </h1>
              <p className="text-sm font-bold italic text-start text-emerald-600">
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="pt-2 pb-2">
                <button onClick={handleOnclick} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex bg-white rounded-sm">
            <div className="pl-10">
              <img className="pt-10 pr-2 w-16" src={slack} alt="" />
            </div>
            <div className="pt-8 pl-2">
              <h1 className="text-2xl font-bold italic text-start text-black">
                Prestigious
              </h1>
              <p className="text-sm font-bold italic text-start text-emerald-600">
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="pt-2 pb-2">
                <button onClick={HandleClickPrestigious} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex bg-white rounded-sm">
            <div className="pl-10">
              <img className="pt-10 pr-2 w-16" src={nfc} alt="" />
            </div>
            <div className="pt-8 pl-2">
              <h1 className="text-2xl font-bold italic text-start text-black">
                Community
              </h1>
              <p className="text-sm font-bold italic text-start text-emerald-600">
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="pt-2 pb-2">
                <button onClick={handleOnclickCummunity} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
