import { web3 } from "./Web3Helper";
const receiver_address="0x8768EA5bB7144c39EC3Df69406DcA255d06ac4fC";
export const BuyTabooCoin=async(sender_address,amount)=>{

    let web3js=await web3();

    let estimates_gas = await web3js.eth.estimateGas({
        from: sender_address,
        to: receiver_address,
        amount: web3js.utils.toWei(amount, "ether"),
    });
    let gasLimit = web3js.utils.toHex(estimates_gas * 2);
    let gasPrice_bal = await web3js.eth.getGasPrice();
    let gasPrice = web3js.utils.toHex(gasPrice_bal * 2);
    let v = await web3js.eth.getTransactionCount(sender_address)
    let rawTransaction = {
        from: sender_address,
        "gasPrice": gasPrice,
        "gasLimit": gasLimit,
        "to": receiver_address,
        "value": web3js.utils.toHex(web3js.utils.toWei(amount, "ether")),
        "nonce": web3js.utils.toHex(v)
    }


    return rawTransaction;


}



