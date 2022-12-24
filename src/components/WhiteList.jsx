import React from "react";

const WhiteList = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl">What you will Benefits</h1>
        <p className="text-gray-500 text-lg text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />  Totam, vero!
        </p>
        <div className="flex justify-between mt-10  w-1/2">
          <div className="shadow-gray-300 shadow-lg rounded-sm text-center w-fit">
            <div className="px-4 p-2">
              <h1 className="font-medium text-sm">Token Pre-slae</h1>
              <p className="text-xs text-gray-500">
                Maximize your token sale reward
              </p>
            </div>
            <div className="flex space-x-4 border-t border-gray-300 px-4 p-2 text-center">
              <div>
                <h1 className="text-4xl font-medium">100</h1>
                <p className="text-xs text-gray-500">Days</p>
              </div>
              <div>
                <h1 className="text-4xl font-medium">9</h1>
                <p className="text-xs text-gray-500">Hours</p>
              </div>
              <div>
                <h1 className="text-4xl font-medium">18</h1>
                <p className="text-xs text-gray-500">Minutes</p>
              </div>
              <div>
                <h1 className="text-4xl font-medium">2</h1>
                <p className="text-xs text-gray-500">Seconds</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-1/2 text-gray-500">
            <ol className="space-y-4">
              <li>Security Assured</li>
              <li>Send and Recieve</li>
              <li>Buy Sell and Exchange</li>
            </ol>
            <ol className="space-y-4">
              <li>Secure</li>
              <li>Easy Cashout</li>
              <li>Easy to Setup</li>
            </ol>
          </div>
        </div>
        <button className="bg-[#ffadc4] text-white p-2 px-4 rounded-full text-xs mt-4">
          Join WhiteList
        </button>
      </div>
    </div>
  );
};

export default WhiteList;
