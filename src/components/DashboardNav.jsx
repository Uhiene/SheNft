import React from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { setGlobalState } from "../store";
import Sidebar from "./Sidebar";

const DashboardNav = () => {
  return (
    <div className="w-full bg-[#F5C1CF] sm:px-10 p-4 flex justify-between items-center border-b-2 border-black">
      <div className="w-1/2 flex items-center gap-10">
        <img
          src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63b69b7aeb475a0fff0549ae_B.png"
          alt=""
          className="h-12"
        />
        <ul className="hidden sm:flex gap-10">
          <Link to={"/dashboard"}>
            <li className="cursor-pointer">Dashboard</li>
          </Link>
          <Link to={"/market"}>
            <li className="cursor-pointer">Markets</li>
          </Link>
          <Link to={"/stake"}>
            <li className="cursor-pointer">Stake</li>
          </Link>
          <Link to={"/governance"}>
            <li className="cursor-pointer">Governance</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <button className="border-2 border-white p-2 sm:px-4 text-sm text-white font-bold rounded-xl"
        >
          Connect Wallet
        </button>
        <GoThreeBars className="md:hidden text-2xl text-white"  onClick={ () => setGlobalState('sidebar', 'scale-100')} />
        <Sidebar/>
      </div>
    </div>
  );
};

export default DashboardNav;
