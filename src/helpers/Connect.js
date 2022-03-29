import { web3 } from "./Web3Helper";
const Connect = async () => {
  try {
    const web3Connect = await web3();
    console.log("web3", web3Connect);
    const accounts = await web3Connect.eth.getAccounts();
    console.log("accounts", accounts);
    return accounts;
  } catch (err) {
    console.log(err.message);
  }
};
export default Connect;
