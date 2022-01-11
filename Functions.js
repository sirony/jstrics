const url = "https://www.locallts.com/admin/order/order_detail/45287";

let urlArray = url.split("/");
console.log(urlArray);

urlArray = urlArray.splice(5, urlArray.length);

console.table(urlArray);