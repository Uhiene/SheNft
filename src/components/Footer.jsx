import React from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa/";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-20 py-5">
      <img
        src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/6359e13b1f520c343d4beff9_d-p-500.png"
        alt=""
        className="w-24"
      />
      <div className="w-full">
        <div className="flex justify-between p-5 border-b border-gray-300">
          <ul className="flex text-white space-x-4 text-xl">
            <li>Collection</li>
            <li>Minting</li>
            <li>DAO</li>
            <li>Blog</li>
          </ul>
          <div className="flex items-center space-x-4">
            <RiTelegramLine />
            <BsTwitter />
            <FaDiscord />
            <AiFillInstagram />
            <AiFillYoutube />
          </div>
        </div>
        <div className="flex justify-between p-5">
          <div className="flex text-white space-x-4 text-xl">
            <p>2022 SheNft. All rights reserved</p>
          </div>
          <div className="">
            <p>Term Of Use Private Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
