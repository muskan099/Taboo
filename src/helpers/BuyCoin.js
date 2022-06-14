import { web3 } from "./Web3Helper";


let contractAddress = "0xa489e74e9253c5C97114A8c86Aa58527226AD8eF";

const abi =[{"inputs":[{"internalType":"address","name":"_taboo","type":"address"},{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"contract IProviderPair","name":"_tabooBnbPair","type":"address"},{"internalType":"contract IProviderPair","name":"_ethBNBPair","type":"address"},{"internalType":"contract IProviderPair","name":"_maticBNBPair","type":"address"},{"internalType":"contract IProviderPair","name":"_usdtBNBPair","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyWithBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyWithEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyWithMatic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"buyWithTokenX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"convertToEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"convertToMatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"convertToUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyShutDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ethBNBPair","outputs":[{"internalType":"contract IProviderPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract IPancake","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTabooPriceWithBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"getTabooPriceWithEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"getTabooPriceWithMatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"getTabooPriceWithUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pairAddress","type":"address"}],"name":"getTabooPriceWithX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maticBNBPair","outputs":[{"internalType":"contract IProviderPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IProviderPair","name":"_usdtBNBPair","type":"address"}],"name":"setBNBUSDTPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IProviderPair","name":"_ethBnbPair","type":"address"}],"name":"setEthBNBPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IProviderPair","name":"_maticBnbPair","type":"address"}],"name":"setMaticBNBPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taboo","type":"address"}],"name":"setTaboo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IProviderPair","name":"_tabooBnbPair","type":"address"}],"name":"setTabooBNBPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taboo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tabooBnbPair","outputs":[{"internalType":"contract IProviderPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"tokenToBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pairAddress","type":"address"},{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"tokenToX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtBNBPair","outputs":[{"internalType":"contract IProviderPair","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

export const BuyTaboo = async (BNBAmount,tabooAmount) => {


  const Web3 = await web3();

  const accounts = await Web3.eth.getAccounts();

  let selectedAccount = accounts[0];

  
  let hashObj=false;



  
  try {
    const nftcontract = new Web3.eth.Contract(abi, contractAddress);

   
   
    let amount = "0x" + (BNBAmount*1000000000000000000).toString(16);

     tabooAmount = "0x" + (tabooAmount*1000000000).toString(16);


    //tabooAmount="0x"+(tabooAmount*1000000000000000000).toString(18);

   

    const nonce = await Web3.eth.getTransactionCount(selectedAccount, "latest");

      

    let estimates_gas = await Web3.eth.estimateGas({
      from: selectedAccount,
      to: contractAddress,
      value:amount,
      // value:'1'
      // value: BigInt(0 * 1000000000000000000).toString(),
      data: nftcontract.methods.buyWithBNB(
            tabooAmount
        )
        .encodeABI(),
    });

  

    let gasLimit = Web3.utils.toHex(estimates_gas * 2);
    let gasPrice_bal = await Web3.eth.getGasPrice();
    let gasPrice = Web3.utils.toHex(gasPrice_bal * 2);

    const tx = {
      from: selectedAccount,
      to: contractAddress,
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      value:amount,
      //'maxPriorityFeePerGas': 1999999987,
      data: nftcontract.methods.buyWithBNB(
            tabooAmount
        )
        .encodeABI(),
    };

   
    let hash = await Web3.eth.sendTransaction(tx);


    hashObj={hash:hash,
            }

  } catch (error) {
    console.error(error.message);
  }

  return  hashObj;
};






export const BuyTabooByETH = async (BNBAmount,tabooAmount) => {


  const Web3 = await web3();

  const accounts = await Web3.eth.getAccounts();

  let selectedAccount = accounts[0];

  
  let hashObj=false;



  
  try {
    const nftcontract = new Web3.eth.Contract(abi, contractAddress);

   
   
    let amount = "0x" + (BNBAmount*1000000000000000000).toString(16);

     tabooAmount = "0x" + (tabooAmount*1000000000).toString(16);


    //tabooAmount="0x"+(tabooAmount*1000000000000000000).toString(18);

   

    const nonce = await Web3.eth.getTransactionCount(selectedAccount, "latest");

      

    let estimates_gas = await Web3.eth.estimateGas({
      from: selectedAccount,
      to: contractAddress,
      value:amount,
      // value:'1'
      // value: BigInt(0 * 1000000000000000000).toString(),
      data: nftcontract.methods.buyWithEth(
            tabooAmount
        )
        .encodeABI(),
    });

  

    let gasLimit = Web3.utils.toHex(estimates_gas * 2);
    let gasPrice_bal = await Web3.eth.getGasPrice();
    let gasPrice = Web3.utils.toHex(gasPrice_bal * 2);

    const tx = {
      from: selectedAccount,
      to: contractAddress,
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      value:amount,
      //'maxPriorityFeePerGas': 1999999987,
      data: nftcontract.methods.buyWithEth(
            tabooAmount
        )
        .encodeABI(),
    };

   
    let hash = await Web3.eth.sendTransaction(tx);


    hashObj={hash:hash,
            }

  } catch (error) {
    console.error(error.message);
  }

  return  hashObj;
};







export const BuyTabooByMatic = async (BNBAmount,tabooAmount) => {


  const Web3 = await web3();

  const accounts = await Web3.eth.getAccounts();

  let selectedAccount = accounts[0];

  
  let hashObj=false;



  
  try {
    const nftcontract = new Web3.eth.Contract(abi, contractAddress);

   
   
    let amount = "0x" + (BNBAmount*1000000000000000000).toString(16);

     tabooAmount = "0x" + (tabooAmount*1000000000).toString(16);


    //tabooAmount="0x"+(tabooAmount*1000000000000000000).toString(18);

   

    const nonce = await Web3.eth.getTransactionCount(selectedAccount, "latest");

      

    let estimates_gas = await Web3.eth.estimateGas({
      from: selectedAccount,
      to: contractAddress,
      value:amount,
      // value:'1'
      // value: BigInt(0 * 1000000000000000000).toString(),
      data: nftcontract.methods.buyWithMatic(
            tabooAmount
        )
        .encodeABI(),
    });

  

    let gasLimit = Web3.utils.toHex(estimates_gas * 2);
    let gasPrice_bal = await Web3.eth.getGasPrice();
    let gasPrice = Web3.utils.toHex(gasPrice_bal * 2);

    const tx = {
      from: selectedAccount,
      to: contractAddress,
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      value:amount,
      //'maxPriorityFeePerGas': 1999999987,
      data: nftcontract.methods.buyWithMatic(
            tabooAmount
        )
        .encodeABI(),
    };

   
    let hash = await Web3.eth.sendTransaction(tx);


    hashObj={hash:hash,
            }

  } catch (error) {
    console.error(error.message);
  }

  return  hashObj;
};






export const BuyTabooByUSDT = async (BNBAmount,tabooAmount) => {


  const Web3 = await web3();

  const accounts = await Web3.eth.getAccounts();

  let selectedAccount = accounts[0];

  
  let hashObj=false;



  
  try {
    const nftcontract = new Web3.eth.Contract(abi, contractAddress);

   
   
    let amount = "0x" + (BNBAmount*1000000000000000000).toString(16);

     tabooAmount = "0x" + (tabooAmount*1000000000).toString(16);


    //tabooAmount="0x"+(tabooAmount*1000000000000000000).toString(18);

   

    const nonce = await Web3.eth.getTransactionCount(selectedAccount, "latest");

      

    let estimates_gas = await Web3.eth.estimateGas({
      from: selectedAccount,
      to: contractAddress,
      value:amount,
      // value:'1'
      // value: BigInt(0 * 1000000000000000000).toString(),
      data: nftcontract.methods.buyWithUSDT(
            tabooAmount
        )
        .encodeABI(),
    });

  

    let gasLimit = Web3.utils.toHex(estimates_gas * 2);
    let gasPrice_bal = await Web3.eth.getGasPrice();
    let gasPrice = Web3.utils.toHex(gasPrice_bal * 2);

    const tx = {
      from: selectedAccount,
      to: contractAddress,
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      value:amount,
      //'maxPriorityFeePerGas': 1999999987,
      data: nftcontract.methods.buyWithUSDT(
            tabooAmount
        )
        .encodeABI(),
    };

   
    let hash = await Web3.eth.sendTransaction(tx);


    hashObj={hash:hash,
            }

  } catch (error) {
    console.error(error.message);
  }

  return  hashObj;
};







export const TabooPrice=async(bnb)=>{

  const Web3 = await web3();

  const nftcontract = new Web3.eth.Contract(abi, contractAddress);

  try{
        

   let balance=await nftcontract.methods.getTabooPriceWithBNB().call({
      from :contractAddress
      });


      console.log("taboo rate",balance)

   let taboo=bnb*balance;
   
   return taboo;
  }catch(e){
    console.log("hello",e);
  }


}



export const TabooPriceByEth=async(bnb)=>{

  const Web3 = await web3();

  const nftcontract = new Web3.eth.Contract(abi, contractAddress);

  try{
        

   let balance=await nftcontract.methods.getTabooPriceWithEth().call({
      from :contractAddress
      });


      console.log("taboo rate",balance)

   let taboo=bnb*balance;
   
   return taboo;
  }catch(e){
    console.log("hello",e);
  }


}




export const TabooPriceByMatic=async(bnb)=>{

  const Web3 = await web3();

  const nftcontract = new Web3.eth.Contract(abi, contractAddress);

  try{
        

   let balance=await nftcontract.methods.getTabooPriceWithMatic().call({
      from :contractAddress
      });


      console.log("taboo rate",balance)

   let taboo=bnb*balance;
   
   return taboo;
  }catch(e){
    console.log("hello",e);
  }


}




export const TabooPriceByUSDT=async(bnb)=>{

  const Web3 = await web3();

  const nftcontract = new Web3.eth.Contract(abi, contractAddress);

  try{
        

   let balance=await nftcontract.methods.getTabooPriceWithUSDT().call({
      from :contractAddress
      });


      console.log("taboo rate",balance)

   let taboo=bnb*balance;
   
   return taboo;
  }catch(e){
    console.log("hello",e);
  }


}