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
    await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:STUDIONET_CHAIN_HEX,chainName:"GenLayer Studionet",nativeCurrency:{name:"GEN",symbol:"GEN",decimals:18},rpcUrls:[STUDIONET_RPC],blockExplorerUrls:[STUDIONET_EXPLORER]}]});
  }
}

export function readClient(){return createClient({chain:CHAIN})}
export async function writeClient(account){if(!account)throw new Error("Connect your wallet first.");await ensureStudioNet();return createClient({chain:CHAIN,account,provider:window.ethereum})}
export async function readContract(functionName,args=[]){return readClient().readContract({address:CONTRACT,functionName,args})}
export async function writeContract(account,functionName,args=[],value){const client=await writeClient(account);return client.writeContract({address:CONTRACT,functionName,args,...(value!==undefined?{value}:{})})}

export function toBigIntString(v){if(typeof v==="bigint")return v.toString();if(v&&typeof v.toString==="function")return v.toString();return String(v??"0")}
export function formatGen(v){try{const n=BigInt(toBigIntString(v));return `${n/1000000000000000000n}.${(n%1000000000000000000n).toString().padStart(18,"0").slice(0,4)} GEN`}catch{return"0 GEN"}}
export function genToWei(v){const s=String(v).trim();if(!/^\d+(\.\d+)?$/.test(s))throw new Error("Enter a valid GEN amount.");const [w,f=""]=s.split(".");return BigInt(w)*1000000000000000000n+BigInt((f+"000000000000000000").slice(0,18))}

const FINAL_STATUSES=new Set(["Finalized"]);
const ACCEPTED_STATUSES=new Set(["Accepted"]);
const TIMEOUT_STATUSES=new Set(["ValidatorsTimeout","LeaderTimeout"]);
const FAILED_STATUSES=new Set(["Canceled","Undetermined"]);

export function classifyTransaction(tx){
  const status=String(tx?.statusName||tx?.status||"");
  const execution=String(tx?.txExecutionResultName||tx?.executionResultName||"");

  if(FINAL_STATUSES.has(status)){
    return execution==="FINISHED_WITH_RETURN"?"finalized":"failed";
  }
  if(ACCEPTED_STATUSES.has(status)){
    return execution && execution!=="FINISHED_WITH_RETURN"?"failed":"accepted";
  }
  if(TIMEOUT_STATUSES.has(status))return"timeout";
  if(FAILED_STATUSES.has(status))return"failed";
  return"pending";
}

export function transactionLabel(state,tx){
  const status=String(tx?.statusName||tx?.status||"");
  const execution=String(tx?.txExecutionResultName||tx?.executionResultName||"");
  if(state==="finalized")return"Finalized — execution succeeded";
  if(state==="accepted")return"Accepted — waiting for finalization";
  if(state==="timeout")return`${status||"Timeout"} — transaction needs attention`;
  if(state==="failed")return`Failed — ${status||execution||"execution did not succeed"}`;
  return status?`Pending — ${status}`:"Pending — waiting for GenLayer";
}

export async function waitForTransaction(hash,onUpdate,{interval=5000,retries=120}={}){
  if(!hash)throw new Error("Missing transaction hash.");
  const client=readClient();
  let last;
  for(let attempt=0;attempt<retries;attempt++){
    try{
      const tx=await client.getTransaction({hash});
      if(tx){
        last=tx;
        const state=classifyTransaction(tx);
        onUpdate?.({state,tx,label:transactionLabel(state,tx)});
        if(state==="finalized")return tx;
        if(state==="failed"||state==="timeout"){
          const status=tx?.statusName||tx?.status||"";
          const execution=tx?.txExecutionResultName||tx?.executionResultName||"";
          throw new Error(`${status||"Transaction failed"}${execution?` / ${execution}`:""}`);
        }
      }
    }catch(error){
      if(error?.message?.includes("Transaction failed")||error?.message?.includes("Canceled")||error?.message?.includes("Timeout")||error?.message?.includes("Undetermined"))throw error;
      // A newly submitted hash may take a few polls to become queryable.
      if(attempt===retries-1)throw error;
    }
    await new Promise(resolve=>setTimeout(resolve,interval));
  }
  const timeoutError=new Error(`Transaction tracking timed out. Keep the hash and resume tracking: ${hash}`);
  timeoutError.code="TRACKING_TIMEOUT";
  timeoutError.transaction=last;
  throw timeoutError;
}
