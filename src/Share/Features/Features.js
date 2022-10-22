import React from "react";
import rhino from "../../images/rhino.svg";
import rhino1 from "../../images/rhino1.svg";
import rhino2 from "../../images/rhino2.svg";
import logistic from "../../images/logistic.svg";
import crypto from "../../images/crypto.svg";
import currancy from "../../images/currancy.svg";
import container from "../../images/container.svg";

import "./Features.css";

const Features = () => {
  return (
    <div className="pt-16 rounded-sm">
      <div className="feature-container">
        <div className="grid grid-cols-2 gap-2 m-2">
          <div>
            <img src={container} className="rounded-lg pt-9" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-3xl italic text-center pt-20">
              Smart System &
            </h1>
            <h2 className="font-bold text-orange-600 text-2xl italic text-center">
              Strong Analysis
            </h2>
            <p className="text-sm font-semibold pt-6">
              Venenatis maximus mauris ultrices tempor iaculis inceptos.
              Hendrerit enim sociosqu et vivamus pretium hac. Fames elementum
              vehicula platea natoque ut fringilla scelerisque suscipit netus
              molestie. Condimentum tortor habitant nec lorem nibh interdum
              volutpat lacinia suspendisse.
            </p>
            <div className="pt-4">
              <button className="w-28 h-8 bg-orange-400 font-bold italic rounded-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold italic text-center pb-12 pt-10">
            Trusted By International Company
          </h1>
        </div>
      </div>
      <div className="pb-16 lines">
        <div className="line m-2 flex justify-between">
          <div className="company-logo">
            <img src={rhino} alt="" />
          </div>
          <div className="company-logo">
            <img src={rhino1} alt="" />
          </div>
          <div className="company-logo">
            <img src={rhino2} alt="" />
          </div>
          <div className="company-logo">
            <img src={logistic} alt="" />
          </div>
          <div className="company-logo">
            <img src={crypto} alt="" />
          </div>
          <div className="company-logo">
            <img src={currancy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
