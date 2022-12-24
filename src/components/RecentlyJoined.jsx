import React from "react";

const RecentlyJoined = () => {
  return (
    <div className="p-10 text-center">
      <h1  className="text-3xl">Recently Joined</h1>
      <p className="text-gray-500 text-lg">
        Lorem ipsum dolor sit, amet conisci laborum in.
      </p>
      <div className="flex flex-wrap justify-center mx-auto">
        {Array(6)
          .fill()
          .map((item, i) => (
            <div className="shadow-gray-300 shadow-sm w-1/4 m-4 flex justify-between p-2 rounded-md">
              <img
                src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63707208f00394283c4c3906_2%20(1)-p-500.png"
                alt=""
                className="w-12 h-16 object-cover rounded-md "
              />
              <div className="text-start w-3/4">
                <h1 className="font-medium">Janne Doe</h1>
                <p className="text-xs text-gray-500">Berlin_Germany</p>
              </div>
            </div>
          ))}
      </div>
      <button className="bg-[#ffadc4] text-white p-2 px-4 rounded-full text-xs mt-4">
          Join WhiteList
        </button>
    </div>
  );
};

export default RecentlyJoined;
