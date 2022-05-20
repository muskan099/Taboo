import axios from "axios";

export const TierHelper=async(punk,balance)=>{

    let usd_balance=await tabooRate(balance);

      if(punk>0){
            return "3 Tier";
      }else if(usd_balance>=5000){


        return "3 Tier";

      }
      else if(usd_balance>2500)
       {
          return "2 Tier";
       }else{
           return "1 Tier";
       }
}


const tabooRate=async(taboo)=>{
 
    let response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=taboo-token&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true');
  //console.log('response',response)
    if (response) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  //let data = await response.data();

    console.log('data',response.data['taboo-token'].usd)

  var totalUsd=  response.data['taboo-token'].usd*taboo
  return totalUsd
}
}