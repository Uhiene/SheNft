import React from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa/";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-10 md:px-20 py-5">
      <img
        src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/6359e13b1f520c343d4beff9_d-p-500.png"
        alt=""
        className="w-32"
      />
      <div className="w-full md:w-4/5 mb-10">
        <div className="md:flex justify-between md:items-end p-5 border-b border-gray-200 pb-10 md:pb-0">
          <ul className="md:flex justify-between items-center w-3/5 text-lg font-thin space-y-2 mb-4 md:mb-0">
            <li>About us</li>
            <li>Rarity</li>
            <li>Brand Kit</li>
            <li>Docs</li>
            <li>FAQ</li>
          </ul>
          <div className="flex items-center space-x-6 text-2xl">
            <RiTelegramLine />
            <BsTwitter />
            <FaDiscord />
            <AiFillInstagram />
            <AiFillYoutube />
          </div>
        </div>
        <div className="md:flex justify-between p-10 md:p-6 border-b border-gray-200 space-y-4">
          <div className="flex space-x-4 text-md md:text-lg font-thin">
            <p>© 2022 SheNft. All rights reserved</p>
          </div>
          <div className="underline font-thin flex space-x-4 text-md md:text-lg">
            <p>Term Of Us</p>
            <p> Private Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
