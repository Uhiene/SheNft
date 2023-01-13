import React from "react";
import { useGlobalState } from "../store";

const Activities = () => {
  const [card] = useGlobalState("card");
  return (
    <div>
      <div className="flex flex-wrap justify-center p-10">
        {card.map((card, i) => (
          <div
            className="bg-gradient-to-b from-[#f2aec1] to-[#ffff]  w-full md:w-[350px] m-5 h-60 md:h-80 p-8 text-start rounded-lg space-y-4 md:space-y-8"
            key={i}
            card={card}
          >
            <img src={card.image} className="w-10" alt="" />
            <h1 className="text-[#160042] text-3xl font-medium">
              Claim Revenue Share
            </h1>
            <p className="text-lg">
              Become a delegate, submit proposals and vote on the SHE nft
              roadmap
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
