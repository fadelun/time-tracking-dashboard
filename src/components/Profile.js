import React from "react";
import ImgJeremy from "../images/image-jeremy.png";

function Profile({ handleClick, time }) {
  return (
    <div className="profile bg-dark-blue-2 h-[202px] lg:h-auto rounded-xl text-white  lg:row-start-1 lg:row-end-3">
      <div className="intro bg-primary rounded-xl h-4/6 py-4 px-6 flex lg:flex-col order-1 justify-between lg:justify-start items-center lg:items-start ">
        <div className="image rounded-full border-2 border-white w-[73px] ">
          <img src={ImgJeremy} alt="profile-img" />
        </div>
        <div className="username lg:mt-6 ">
          <p className="text-gray-300 ">Report for</p>
          <h1 className="text-xl lg:text-4xl font-light">Jeremny Robson</h1>
        </div>
      </div>
      <div className="flex lg:flex-col justify-around text-purple items-center lg:items-start h-2/6 lg:p-6 ">
        <button className={`lg:mb-2 hover:text-white ${time === "Daily" ? "text-white" : ""}`} onClick={handleClick}>
          Daily
        </button>
        <button className={`hover:text-white ${time === "Weekly" ? "text-white" : ""} `} onClick={handleClick}>
          Weekly
        </button>
        <button className={`lg:mt-2 hover:text-white active:text-white ${time === "Monthly" ? "text-white" : ""}`} onClick={handleClick}>
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
