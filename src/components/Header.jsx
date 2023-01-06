import {GoThreeBars} from "react-icons/go"

const Header = () => {
  return (
    <div className="py-6 px-12 flex justify-between items-center bg-[#ebebeb]">
      <div className="w-fit bg-black rounded-2xl overflow-hidden">
        <img
          src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63b69b7aeb475a0fff0549ae_B.png"
          alt=""
          className="w-36"
        />
      </div>
      <div className="hidden  md:flex justify-between md:w-2/5">
        <p className="hover:text-purple-500 cursor-pointer">Dashboard</p>
        <p className="hover:text-purple-500 cursor-pointer">Minting</p>
        <p className="hover:text-purple-500 cursor-pointer">Staking</p>
        <p className="hover:text-purple-500 cursor-pointer">Governace</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="bg-[#f2aec1] text-white py-4 px-8 font-medium rounded-full">Connect Wallet</button>
      <GoThreeBars className="md:hidden"/>
      </div>
      
    </div>
  );
};

export default Header;
