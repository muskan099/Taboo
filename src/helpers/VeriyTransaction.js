import { web3 } from "../helpers/Web3Helper";

export const VerifyTransactions = async (hash, amount) => {
  let web3js = await web3();

  //let transactionData=await web3js.eth.getTransaction(hash.transactionHash);
  let hash1 = false;
  try {
    console.log("hash", hash);
    let transactionData = await web3js.eth.getTransactionReceipt(
      hash.transactionHash
    );
    console.log("babalALX", transactionData);

    let receiverWallet = web3js.eth.abi.decodeParameter(
      "address",
      transactionData.logs[2].topics[2]
    );
    let txData1 = web3js.eth.abi.decodeParameter(
      "uint256",
      transactionData.logs[2].data
    );

    console.log("txData1",txData1);

    let txAmount = txData1/1000000000;

   // console.log("babalALX", transactionData);

  //  console.log("receiverWallet", receiverWallet);


    

    amount=parseFloat(amount);

    txAmount=parseFloat(txAmount);

    

   // console.log("trx amount", txAmount);

    //console.log("amount",amount);



    receiverWallet = receiverWallet.toLowerCase();

    let adminWalletAddress = "0xeacA827FFd13DE31e4BD03Ae12D17064546d745a";
    adminWalletAddress = adminWalletAddress.toLowerCase();

    if (amount === txAmount && receiverWallet === adminWalletAddress) {
      hash1 = true;
    }

    return hash1;
    
  } catch (e) {
    return hash1;
  }
};

export default VerifyTransactions;
