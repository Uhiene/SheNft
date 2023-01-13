import React from "react";
import DashboardNav from "../components/DashboardNav";

const Governance = () => {
  return (
    <div>
      <DashboardNav />
      <div className="h-fit bg-[#F5C1CF] relative px-32 py-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae3035dbb8c10760f46d76_7734-p-500.png"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-3xl">SHE Governance</h1>
        </div>
        <p className="text-sm font-light">
            Welcome to SHE Nft. Our platform
            features a diverse collection of Non-Fungible Tokens (NFTs) created
            by women artists from around the globe. Each NFT represents a unique
            and one-of-a-kind digital artwork that you can own and collect. The
            artworks range from vibrant illustrations and animations to digital
            sculptures and virtual reality experiences. Our mission is to
            provide a space where female artists can showcase their talents and
            have their voices heard. We believe that digital art can be a
            powerful medium for self-expression and we are proud to be at the
            forefront of this movement. Join us and discover a new generation of
            female artists making waves in the digital art world.
          </p>
      </div>
    </div>
  );
};

export default Governance;
