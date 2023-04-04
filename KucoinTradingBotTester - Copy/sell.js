let start = performance.now();
const API = require("kucoin-node-sdk");

API.init(require("./config"));

const main = async () => {
  let coin = "BTC";
  let qty = "2"
  
  params = {
    clientOid: "order1",
    side: "sell",
    symbol: `${coin}-USDT`,
    type: "market",
    size: qty
  }

  const sell = await API.rest.Trade.Orders.postOrder(params);
  console.log(sell);
  
};

main();
let end = performance.now() - start;
console.log(end.toPrecision(4) + " ms");
