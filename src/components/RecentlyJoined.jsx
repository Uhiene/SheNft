import React from "react";

const RecentlyJoined = () => {
  return (
    <div className="p-10 h-1/2 text-center">
      <h1 className="text-2xl font-bold">Recently Joined</h1>
      <p className="text-gray-500">
        Lorem ipsum dolor sit, amet conisci laborum in.
      </p>
      <div>
        {Array(5).fill().map((item, i) => {
            <div className="shadow-gray-300 shadow-sm w-1/5 flex justify-between p-4 rounded-md">
            <img
              src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63707208f00394283c4c3906_2%20(1)-p-500.png"
              alt=""
              className="w-10 rounded-md"
            />
            <div>
              <h1>Janne Doe</h1>
              <p>Berlin_Germany</p>
            </div>
          
          </div>
        })}
        {Array(5).fill().map((item, i) => (
            <div className="shadow-gray-300 shadow-sm w-1/5 flex justify-between p-4 rounded-md">
            <img
              src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63707208f00394283c4c3906_2%20(1)-p-500.png"
              alt=""
              className="w-10 rounded-md"
            />
            <div>
              <h1>Janne Doe</h1>
              <p>Berlin_Germany</p>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyJoined;
