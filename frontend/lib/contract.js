import {createClient} from "genlayer-js";
import {studionet} from "genlayer-js/chains";

export const CONTRACT=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.trim()||"0xd21c82603a64Bd42ff37FB04cD004699c6A4BbeA";
export const CHAIN=studionet;
export const STUDIONET_CHAIN_ID=61999;
export const STUDIONET_CHAIN_HEX="0xf22f";
export const STUDIONET_RPC="https://studio.genlayer.com/api";
export const STUDIONET_EXPLORER="https://explorer-studio.genlayer.com";

export async function ensureStudioNet(){
  if(!window.ethereum)throw new Error("Browser wallet provider not found.");
  const current=await window.ethereum.request({method:"eth_chainId"});
  if(String(current).toLowerCase()===STUDIONET_CHAIN_HEX)return;
  try{
    await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:STUDIONET_CHAIN_HEX}]});
  }catch(error){
    if(error?.code!==4902)throw error;
    await window.ethereum.request({
      method:"wallet_addEthereumChain",
      params:[{
        chainId:STUDIONET_CHAIN_HEX,
        chainName:"GenLayer Studionet",
        nativeCurrency:{name:"GEN",symbol:"GEN",decimals:18},
        rpcUrls:[STUDIONET_RPC],
        blockExplorerUrls:[STUDIONET_EXPLORER]
      }]
    });
  }
}

export function readClient(){return createClient({chain:CHAIN})}

export async function writeClient(account){
  if(!account)throw new Error("Connect your wallet first.");
  await ensureStudioNet();
  return createClient({chain:CHAIN,account,provider:window.ethereum});
}

export async function readContract(functionName,args=[]){return readClient().readContract({address:CONTRACT,functionName,args})}
export async function writeContract(account,functionName,args=[],value){
  const client=await writeClient(account);
  return client.writeContract({address:CONTRACT,functionName,args,...(value!==undefined?{value}:{})});
}
export function toBigIntString(v){if(typeof v==="bigint")return v.toString();if(v&&typeof v.toString==="function")return v.toString();return String(v??"0")}
export function formatGen(v){try{const n=BigInt(toBigIntString(v));return `${n/1000000000000000000n}.${(n%1000000000000000000n).toString().padStart(18,"0").slice(0,4)} GEN`}catch{return"0 GEN"}}
export function genToWei(v){const s=String(v).trim();if(!/^\d+(\.\d+)?$/.test(s))throw new Error("Enter a valid GEN amount.");const [w,f=""]=s.split(".");return BigInt(w)*1000000000000000000n+BigInt((f+"000000000000000000").slice(0,18))}
