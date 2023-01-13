import React from "react";
import DashboardNav from "../components/DashboardNav";

const Governance = () => {
  return (
    <div>
      <DashboardNav />
      <div className="h-fit bg-[#F5C1CF] relative px-5 sm:px-32 py-14 sm:py-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae3035dbb8c10760f46d76_7734-p-500.png"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-3xl">SHE Governance</h1>
        </div>
        <p className="text-sm font-light">
          Welcome to SHE Nft. Our platform features a diverse collection of
          Non-Fungible Tokens (NFTs) created by women artists from around the
          globe. The artworks range from vibrant
          illustrations and animations to digital sculptures and virtual reality
          experiences. Our mission is to provide a space where female artists
          can showcase their talents and have their voices heard. We believe
          that digital art can be a powerful medium for self-expression and we
          are proud to be at the forefront of this movement. Join us and
          discover a new generation of female artists making waves in the
          digital art world.
        </p>
      </div>
      <div className="sm:flex sm:justify-between w-full space-y-4 sm:space-y-0 absolute px-5 sm:px-10 bottom-16 sm:bottom-0 sm:top-72">
        <div className="bg-white rounded-md p-4 space-y-2 sm:w-[33%] h-fit shadow-sm shadow-[#0000008f]">
          <h1 className="font-semibold text-xl">Your Info</h1>
          <div className="flex justify-between items-start">
            <div>
            <h1 className="font-medium text-lg">Stakeholder</h1>
            <p className="font-light">(SheMint Stakeholder)</p>
          </div>
          <p className="font-semibold ">0</p>
          </div>      
          <div className="flex justify-between items-start">
            <div>
            <h1 className="font-medium text-lg">Proposals</h1>
            <p className="font-light">(15 proposals submitted)</p>
          </div>
          <p className="font-semibold ">0</p>
          </div>
        </div>
        <div className="bg-white rounded-md space-y-5 sm:w-[65%] h-fit  shadow-sm shadow-[#000000]">
          <h1 className="font-semibold p-4 border-b">Proposals</h1>
          <div className="border-b p-4">
            <h1>Proposals</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
