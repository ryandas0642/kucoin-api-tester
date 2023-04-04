let start = performance.now();
const API = require("kucoin-node-sdk");

API.init(require("./config"));

const main = async () => {
  let coin = "BTC";
  let amt = "2"
  
  params = {
    clientOid: "order1",
    side: "buy",
    symbol: `${coin}-USDT`,
    type: "market",
    funds: amt
  }

  const buy = await API.rest.Trade.Orders.postOrder(params);
  console.log(buy);
  
};

main();
let end = performance.now() - start;
console.log(end.toPrecision(4) + " ms");
