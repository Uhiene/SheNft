import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    card: [
        {
           id:1, 
           image:"https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae315b917c0c92d7377590_34114-p-500.png",
           heading:"Governance and Voting",
            text:"Become a delegate, submit proposals and vote on the SHE nft roadmap",
        },
        {
           id:2, 
           image:"https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae3125dbb8c14bfef47ef1_29925-p-500.png",
           heading:"Claim Revenue Share",
            text:"Claim your ETH from the public and secondary sales",
        },
        {
           id:3, 
           image:"https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63b0971257f342c18fd52edc_2-p-500.png",
           heading:"Exclusive Dapp Access",
            text:"Try newly released decentralized applications built for the SHE nft community",
        },
        {
           id:4, 
           image:"https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae3035dbb8c10760f46d76_7734-p-500.png",
           heading:"Staking",
            text:"Stake you NFT's and receive SHE nft DAO tokens",
        },
        {
           id:5, 
           image:"https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae2a7edbb8c15c82f40db6_24228-p-500.png",
           heading:"Creator Studio",
            text:"Create and Launch your very own nft collection",
        },
        {
           id:6, 
           image:"https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63ae2db1910c705d63c333b2_6845-p-500.png",
           heading:"News Updates",
            text:"Stay up to date on all SHE nft news and updates",
        },
        
        
    ]
});
export { setGlobalState, useGlobalState, getGlobalState };
