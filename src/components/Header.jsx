import sheNft from "../assets/bg-transparent.png"


const Header = () => {
  return (
    <div className="bg-cover bg-center min-h-screen header">
      <nav className="flex justify-between items-center p-4 px-20">
        <img
          src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/6359e13b1f520c343d4beff9_d-p-500.png"
          alt=""
          className="w-28"
        />
        <ul className="flex font-medium space-x-4 text-xl">
          <li>Collection</li>
          <li>Minting</li>
          <li>DAO</li>
          <li>Blog</li>
        </ul>
        <button className="bg-[#ffadc4] text-white p-2 px-4 rounded-full text-xs">
          Connect Wallect
        </button>
      </nav>
      <div className="text-center mt-10 flex flex-col items-center">
        <h1 className="text-6xl">SHE NFT WHITE LISTING</h1>
        <p className="text-gray-500 text-xl my-1">Get Early Access to our</p>
        <button className="bg-[#ffadc4] text-white p-2 px-4 rounded-full text-xs mt-4">
          Join WhiteListing
        </button>
        <img
          src={sheNft}
          alt="" className="w-1/2"
        />
        <div className="flex justify-between w-1/2">
          <div>
            <h1 className="text-2xl font-medium">ERC-721</h1>
            <p className="text-xs">Ethereum NFT</p>
            <a href="" className="text-xs underline">Learn more</a>
          </div>
          <div>
            <h1 className="text-2xl font-medium">Rarirty</h1>
            <p className="text-xs">Traits</p>
            <a href="" className="text-xs underline">Learn more</a>
          </div>
          <div>
            <h1 className="text-2xl font-medium">50,000</h1>
            <p className="text-xs">Piece Collection</p>
            <a href="" className="text-xs underline">Learn more</a>
          </div>
          <div>
            <h1 className="text-2xl font-medium">Utility</h1>
            <p className="text-xs">Made for NFT Creators</p>
            <a href="" className="text-xs underline">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
