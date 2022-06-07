import { web3 } from "./Web3Helper";


const contractAddress = '0x32140091d6f88932C2a6634e75858bC092dB0016';

const abi =[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftContract","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"buyNowPrice","type":"uint256"}],"name":"SaleCreated","type":"event"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_proposedPrice","type":"uint256"},{"internalType":"address","name":"_proposingBuyer","type":"address"}],"name":"acceptBuyProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"buyFromProposal","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"buyNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"buyProposal","outputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_buyNowPrice","type":"uint256"},{"internalType":"uint256","name":"_royaltyPercentage","type":"uint256"}],"name":"changeSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"uint256[]","name":"_tokenId","type":"uint256[]"},{"internalType":"uint256[]","name":"_buyNowPrice","type":"uint256[]"},{"internalType":"uint32","name":"_ownerPercentage","type":"uint32"},{"internalType":"uint32","name":"_platformPercentage","type":"uint32"},{"internalType":"uint32","name":"_royaltyPercentage","type":"uint32"}],"name":"createBatchResale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"uint32","name":"_ownerPercentage","type":"uint32"},{"internalType":"uint32","name":"_platformPercentage","type":"uint32"},{"internalType":"uint256","name":"_buyNowPrice","type":"uint256"},{"internalType":"uint32","name":"_royaltyPercentage","type":"uint32"}],"name":"createResale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformLazyNFT","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftContractSale","outputs":[{"internalType":"address","name":"nftSeller","type":"address"},{"internalType":"address","name":"ERC20Token","type":"address"},{"internalType":"uint32","name":"ownerPercentage","type":"uint32"},{"internalType":"uint32","name":"platformPercentage","type":"uint32"},{"internalType":"uint256","name":"buyNowPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftRoyalty","outputs":[{"internalType":"address","name":"royaltyOwner","type":"address"},{"internalType":"uint256","name":"royaltyPercentage","type":"uint256"},{"internalType":"bool","name":"activated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformLazyNFT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketplace","type":"address"}],"name":"setMarketplaceContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformLazyNFT","type":"address"}],"name":"setPlatformLazy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_royaltyPercentage","type":"uint256"},{"internalType":"address","name":"_royaltyOwner","type":"address"}],"name":"setRoyaltyData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenId","type":"uint256[]"},{"internalType":"uint256[]","name":"_royaltyPercentage","type":"uint256[]"},{"internalType":"address[]","name":"_royaltyOwner","type":"address[]"}],"name":"setRoyaltyDataByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_royaltyPercentage","type":"uint256"},{"internalType":"address","name":"_royaltyOwner","type":"address"}],"name":"setRoyaltyDataMarketplace","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdrawSale","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export const Sale=async(data)=>{
        
    let web3js=await web3();

   // console.log('data',data);

    const SaleContract = new web3js.eth.Contract(abi, contractAddress);

    const nonce = await Web3.eth.getTransactionCount(selectedAccount, "latest");

    
    let hash=false;

   
    

    try{



        
    let gasLimit = web3js.utils.toHex(estimates_gas * 2);
    let gasPrice_bal = await web3js.eth.getGasPrice();
    let gasPrice = web3js.utils.toHex(gasPrice_bal * 2);

    const tx = {
      from: selectedAccount,
      to: contractAddress,
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      value: web3js.utils.toHex(Web3.utils.toWei("0", "gwei")),
      //'maxPriorityFeePerGas': 1999999987,
      data: nftcontract.methods
        .redeem(
          selectedAccount,
          voucher,
          creator,
          admin_address,
          adminPercent,
          royaltyPercent,
          platformPercent,
          tabooAddress
        )
        .encodeABI(),
      };

         hash=await web3js.eth.sendTransaction(data.tx);


       }catch(e){
        console.log(e);
    }
    return hash;
    
}