import React from "react";
import DashboardNav from "../components/DashboardNav";
import { useGlobalState } from "../store";

const Dashboard = () => {
  const [nftMinted] = useGlobalState("nftMinted");
  return (
    <div className="">
      <DashboardNav />
      <div className="h-[10vh] sm:h-[30vh] bg-[#F5C1CF] relative"></div>
      <div className="h-screen border">
        <div className="sm:flex sm:justify-between w-full space-y-4 sm:space-y-0 absolute px-10 top-32 sm:top-56">
          <div className="bg-white rounded-sm p-4 space-y-5 sm:w-[49.5%] shadow-sm shadow-[#0000008f]">
            <h1 className="font-semibold text-4xl">10</h1>
            <p className="font-light">Total NFT's on this Wallet</p>
          </div>
          <div className="bg-white rounded-sm space-y-5 sm:w-[49.5%] p-4 shadow-sm shadow-[#000000]">
            <h1 className="font-semibold">Revenue 0.57eth</h1>
            <p className="font-light">Revenue generated</p>
          </div>
        </div>
        <div className="sm:flex sm:justify-between space-y-4 sm:space-y-0 w-full px-10 mt-60 sm:mt-[88px]">
          <div className="bg-white rounded-sm p-4  sm:w-[49.5%] shadow-sm shadow-[#000000]">
            <h1 className="font-semibold my-2">NFT's Minted</h1>
            <p className="text-sm">Nfts</p>
            {nftMinted.map((nft, i) => (
              <div
                className="border-t border-[#0000008f] p-2 flex items-center gap-4"
                key={i}
                nft={nftMinted}
              >
                <img
                  src={nft.image}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full "
                />
                <p className="text-md font-medium">{nft.names}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-sm sm:w-[49.5%] p-4 shadow-sm shadow-[#000000]">
            <h1 className="font-semibold my-2">Treding NFT's</h1>
            <p className="text-sm">Nfts</p>
            {nftMinted.map((nft, i) => (
              <div
                className="border-t border-[#0000008f] p-2 flex items-center justify-between"
                key={i}
                nft={nftMinted}
              >
                <div className="gap-4 flex items-center">
                  <img
                    src={nft.image}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full "
                  />
                  <p className="text-md font-medium">{nft.names}</p>
                </div>
                <button className="bg-pink-600 text-white py-1 px-2 font-medium rounded-md">Purchase</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
