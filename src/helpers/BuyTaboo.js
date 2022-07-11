import { web3 } from "./Web3Helper";
const receiver_address="0x8768EA5bB7144c39EC3Df69406DcA255d06ac4fC";


let wADA="0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31";

let wBTC="0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";

let DogeCoin="0xba2ae424d960c26247dd6c32edc70b295c744c43";

let ChainLink="0x404460c6a5ede2d891e8297795264fde62adbb75";

let Uniswap="0xbf5140a22578168fd562dccf235e5d43a02ce9b1";



let usdtContract="0x55d398326f99059fF775485246999027B3197955";

const usdtAbi=[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];



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


export const BuyTabooCoinByOtherToken=async(sender_address,amount,type)=>{

      let web3js=await web3();
            
        if(type=="wrapped-ada"){
            usdtContract=wADA;
        }else if(type=="wrapped-bitcoin"){
            usdtContract=wBTC;

        }else if(type=="dogcCoin"){
            usdtContract=DogeCoin;
        }else if(type=="chainlink"){
            usdtContract=ChainLink;
        }else if(type=="uniswap"){
            usdtContract=Uniswap;
        }else{
            usdtContract= usdtContract;
        }



    let contractAddress=usdtContract;



   const TokenContract = new web3js.eth.Contract(usdtAbi, usdtContract);
    
  const nonce = await web3js.eth.getTransactionCount(sender_address, 'latest'); //get latest nonce
  const from_account = web3js.utils.toChecksumAddress(sender_address);
  const to_account=web3js.utils.toChecksumAddress(receiver_address);
   
  amount = "0x" + (amount * 1000000000000000000).toString(16);

  let estimates_gas = await web3js.eth.estimateGas({
      'from':from_account,
      'to':contractAddress,
      "data":TokenContract.methods.transfer(
          to_account,
          amount,
       ).encodeABI(),
    }); 
  
    let gasLimit =web3js.utils.toHex(estimates_gas *2);
     let gasPrice_bal = await web3js.eth.getGasPrice();
    let gasPrice =web3js.utils.toHex(gasPrice_bal*2);

   let tx = {
      'from':from_account,
      'to':contractAddress,
      'nonce': nonce,
      'gasPrice':gasPrice,
      'gasLimit':gasLimit,
      //'maxPriorityFeePerGas': 1999999987,
      'data': TokenContract.methods.transfer(to_account,amount).encodeABI()
      };

    return tx;


}


export const TokenBalance=async(address,type)=>{


    let web3js=await web3();


        
    if(type=="wrapped-ada"){
        usdtContract=wADA;
    }else if(type=="wrapped-bitcoin"){
        usdtContract=wBTC;

    }else if(type=="dogecoin"){
        usdtContract=DogeCoin;
    }else if(type=="chainlink"){
        usdtContract=ChainLink;
    }else if(type=="uniswap"){
        usdtContract=Uniswap;
    }else{
        usdtContract= usdtContract;
    }


     const TokenContract = new web3js.eth.Contract(usdtAbi, usdtContract);

     let balance=0;

     try{
          balance=await TokenContract.methods.balanceOf(address).call({
             from :usdtContract
             });
             balance=balance/1000000000000000000;
           // let usd_balance= await tabooRate(balance)
           return balance;
        }catch(e){
         console.log(e);
     }
     return balance;
     
}




