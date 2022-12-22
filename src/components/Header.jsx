// import nftBg from "../assets/nft-bg-img.jpg";

const Header = () => {
  return (
    <div className="bg-[url(/src/assets/background-img.jpg)] bg-cover bg-center h-4/5  header">
      <nav className="flex justify-between items-center p-4 px-20">
        <img src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/6359e13b1f520c343d4beff9_d-p-500.png"
         alt="" className="w-24" />
         <div className="w-1/2 flex justify-between">
                  <ul className="flex text-white space-x-4 text-xl">
          <li>Collection</li>
          <li>Minting</li>
          <li>DAO</li>
          <li>Blog</li>
        </ul>
        <button className="bg-pink-700 text-white p-1 px-2 rounded-full text-xs">Connect Wallect</button>
         </div>

      </nav>
      <div className="text-center mt-10">
        <h1 className="text-7xl text-white">SHE <span className="text-[#f8c55a]"> NFT</span></h1>
        <p className="text-2xl text-white">WhiteListing</p>
        <button className="bg-pink-700 text-white p-2 px-4 rounded-full text-xs mt-4">Join WhiteListing</button>
      </div>

      <div>
        {/* <img src={nftBg } alt="" /> */}
      </div>
      
    </div>
  );
};

export default Header;
