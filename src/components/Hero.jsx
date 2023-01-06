import React from "react";

const Hero = () => {
  return (
    <div className="md:px-12 py-5 text-center bg-[#ebebeb]">
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 md:px-0 rounded-lg md:rounded-none">
        <div className="w-3/5 md:w-1/2 text-start space-y-10 md:space-y-6 mb-20 md:mb-0 ">
          <h1 className="text-5xl md:text-7xl font-bold">
            The NFT community for everyone!
          </h1>
          <p className="text-lg">
            Bringing everyone together in web3 for the next wave in NFT's.
          </p>
          <button className="bg-gradient-to-r from-[#12a67c] via-[#f2aec1] to-white p-4 px-10 text-lg text-white font-bold rounded-xl">
            Lunch App
          </button>
 
        </div>
        <div className="md:w-1/2 md:ml-20 flex flex-col items-start w-4/5 md:items-center ">
          <img
            src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63b73e53929a670ae835ba38_Untitled%20(4000%20%C3%97%203500%20px)-p-800.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="flex md:justify-between justify-center items-center mt-20 md:py-0">
        <p className="hidden md:block">As seen on</p>
        <img src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/637e6569424247cba6945eab_nftcalendar-500x500-p-500.png" alt="" 
         className="w-32"/>
      </div>
    </div>
  );
};

export default Hero;
