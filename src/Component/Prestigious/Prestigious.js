import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import rhino from "../../images/rhino.svg";
import rhino1 from "../../images/rhino1.svg";
import rhino2 from "../../images/rhino2.svg";
import logistic from "../../images/logistic.svg";
import crypto from "../../images/crypto.svg";
import currancy from "../../images/currancy.svg";

const Prestigious = () => {
    return (
        <div className='m-2'>
            <div className='pt-12'>
            <h1 className='text-4xl text-center text-black font-bold italic pt-8 pb-12'>Our Website Prestigious</h1>
            <div className="grid grid-cols-3 gap-8 pt-12 pb-8">
        <div className="flex bg-white rounded-sm justify-center">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={rhino} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
             RHINO
            </h1>
           <div className='flex'>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500"/></p>
           </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm justify-center">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={rhino1} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              ICAS
            </h1>
            <div className='flex'>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500"/></p>
           </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm justify-center">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={rhino2} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              ZORIBA
            </h1>
            <div className='flex'>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500"/></p>
           </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm justify-center">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={logistic} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              LOGISTIC
            </h1>
            <div className='flex'>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500"/></p>
           </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm justify-center">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={currancy} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              COLNACO
            </h1>
            <div className='flex'>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500"/></p>
           </div>
          </div>
        </div>
        <div className="flex bg-white rounded-sm justify-center">
          <div className="pl-10">
            <img className="pt-10 pr-2 w-16" src={crypto} alt="" />
          </div>
          <div className="pt-8 pl-2">
            <h1 className="text-2xl font-bold italic text-start text-black">
              CRYPTO
            </h1>
            <div className='flex'>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStar} className="text-yellow-500"/></p>
          <p> <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500"/></p>
           </div>
          </div>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Prestigious;