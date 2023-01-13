import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../store";

const Sidebar = () => {
  const [sidebar] = useGlobalState("sidebar");

  return (
    <div
      className={`bg-[#F5C1CF] fixed top-0 left-0 w-screen h-screen p-4 transform z-50 transition-transform duration-300 ${sidebar}`}
    >
      <div className="flex items-center justify-between w-full">
        <img
          src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63b69b7aeb475a0fff0549ae_B.png"
          alt=""
          className="h-12"
        />
        <button
          type="button"
          className="border-0 bg-transparent focus:outline-none"
          onClick={() => setGlobalState("sidebar", "scale-0")}
        >
          <FaTimes className="text-gray-400 hover:text-purple-500 text-2xl" />
        </button>
      </div>
      <div>
      <ul className="mt-6 text-2xl font-medium">
          <Link to={"/dashboard"} onClick={() => setGlobalState("sidebar", "scale-0")}>
            <li className="cursor-pointer mb-4">Dashboard</li>
          </Link>
          <Link to={"/market"} onClick={() => setGlobalState("sidebar", "scale-0")}>
            <li className="cursor-pointer mb-4">Markets</li>
          </Link>
          <Link to={"/stake"} onClick={() => setGlobalState("sidebar", "scale-0")}>
            <li className="cursor-pointer mb-4">Stake</li>
          </Link>
          <Link to={"/governance"} onClick={() => setGlobalState("sidebar", "scale-0")}>
            <li className="cursor-pointer mb-4">Governance</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
