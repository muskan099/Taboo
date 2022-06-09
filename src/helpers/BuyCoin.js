import { web3 } from "./Web3Helper";


let contractAddress = "0xB6b6f4Eb4ce125feda4bd76E2902c6ccE7dC378A";

  const abi =[{"inputs":[{"internalType":"contract IProviderPair","name":"_pairAddress","type":"address"},{"internalType":"address","name":"_taboo","type":"address"},{"internalType":"address","name":"_wallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyWithBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getTabooPriceWithBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pairAddress","type":"address"}],"name":"getTabooPriceWithX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"contract IProviderPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IProviderPair","name":"_pairAddress","type":"address"}],"name":"setProviderPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taboo","type":"address"}],"name":"setTaboo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taboo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"tokenToBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pairAddress","type":"address"},{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"tokenToX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]


export const BuyNFT = async (BNBAmount,tabooAmount) => {


  const Web3 = await web3();

  const accounts = await Web3.eth.getAccounts();

  let selectedAccount = accounts[0];

  
  let hashObj=false;



  
  try {
    const nftcontract = new Web3.eth.Contract(abi, contractAddress);

   
   
    let amount = "0x" + (minPrice*1000000000).toString(16);

    

   

    const nonce = await Web3.eth.getTransactionCount(selectedAccount, "latest");

      

    let estimates_gas = await Web3.eth.estimateGas({
      from: selectedAccount,
      to: contractAddress,
      value: Web3.utils.toHex(Web3.utils.toWei("0", "gwei")),
      // value:'1'
      // value: BigInt(0 * 1000000000000000000).toString(),
      data: nftcontract.methods
        .buyWithBNB(
            BNBAmount,
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
      value: Web3.utils.toHex(Web3.utils.toWei("0", "gwei")),
      //'maxPriorityFeePerGas': 1999999987,
      data: nftcontract.methods
        .buyWithBNB(
            BNBAmount,
            tabooAmount
         
        )
        .encodeABI(),
    };

   
    let hash = await Web3.eth.sendTransaction(tx);


    hashObj={hash:hash,
             token:token
            }

  } catch (error) {
    console.error(error.message);
  }

  return  hashObj;
};
