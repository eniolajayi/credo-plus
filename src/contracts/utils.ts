import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./constants";
import abi from "./credopayment.json";

export function getPaymentContract() {
  let contract;
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
      return contract;
    }
  } catch (err) {
    console.log(err);
  }
}
