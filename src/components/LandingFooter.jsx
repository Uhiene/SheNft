import React from "react";

const LandingFooter = () => {
  return (
    <div className="md:px-[68px] md:pb-20 px-14">
      <div className="bg-[#0d0d0d] w-full py-32 px-14 overflow-hidden">
        <div className="md:flex justify-between md:w-4/5">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63b69b7aeb475a0fff0549ae_B-p-500.png"
              alt=""
              className="w-64"
            />
            <div className="flex space-x-6 pb-10">
              <div className="bg-white hover:bg-orange-400 cursor-pointer rounded-full w-10 h-10 flex justify-center ">
                <img
                  src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/6365f7aa9aa068049e8743a8_1-p-500.png"
                  alt=""
                  className="w-5 object-contain"
                />
              </div>
              <div className="bg-white hover:bg-orange-400 cursor-pointer rounded-full w-10 h-10 flex justify-center ">
                <img
                  src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63706f04ef41c9367f255f02_Untitled%20(500%20%C3%97%20500%20px)%20(1)-p-500.png"
                  alt=""
                  className="w-5 object-contain"
                />
              </div>
              <div className="bg-white hover:bg-orange-400 cursor-pointer rounded-full w-10 h-10 flex justify-center ">
                <img
                  src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/6365f7a9b26325febf8638b3_2-p-500.png"
                  alt=""
                  className="w-5 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between md:w-3/5 mb-10 md:mb-0">
            <div className="text-lg text-white leading-[50px]">
              <h1 className="font-medium text-xl">Home</h1>
              <p className="text-gray-300">Dashboard</p>
              <h1 className="font-medium text-xl">About</h1>
              <p className="text-gray-300">More info</p>
            </div>
            <div className="text-lg text-white leading-[50px]">
              <h1 className="font-medium text-xl">Company</h1>
              <p className="text-gray-300">Careers</p>
              <p className="text-gray-300">Help Centre</p>
              <p className="text-gray-300">Reach out</p>
            </div>
            <div className="text-lg text-white leading-[50px]">
              <h1 className="font-medium text-xl">Other Pages</h1>
              <p className="text-gray-300">Blog</p>
              <p className="text-gray-300">Trending</p>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-600 text-lg text-gray-300 font-medium p-10">
          <p>© All rights reserved. By</p>
          <p className="text-[#b16cea] underline">Startship Labs</p>
          <p>Powered by</p>
          <p className="text-[#b16cea] underline">SHEnft</p>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
