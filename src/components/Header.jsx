const Header = () => {
  return (
    <div className="md:px-12 py-5 text-center">
      <h1 className="text-pink-300 text-5xl">
        Official White List Registration
      </h1>
      <div className="md:flex md:items-center my-10 md:my-20 bg-pink-300 md:bg-white p-12 md:px-0 rounded-lg md:rounded-none">
        <div className="w-full md:w-2/5 text-start space-y-10 md:space-y-4 mb-20 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold">Join WL</h1>
          <p className="text-lg">
            Join the SHE NFT WL by interacting on the chain. Connect your wallet
            and introduce your personal or professional brand.
          </p>
        </div>
        <div className="md:ml-20 flex flex-col items-start w-fit md:items-center">
          <img src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63a9eb94f3af990f8959b379_ezgif.com-gif-maker%20(9).gif" alt="" className="w-96 h-96 rounded-3xl" />
          <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 px-6 rounded-lg">Connect Wallect</button>
        </div>
        
      </div>
      <p className="text-md px-12">Set Metamask or other web3 wallet to Polygon mainnet. Enter your details and click sumbit. Sign any transactions in your wallet. Your 're listed!</p>
    </div>
  );
};

export default Header;
