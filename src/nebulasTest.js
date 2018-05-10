"use strict";

var Nebulas = require('nebulas')
// import Nebulas from 'nebulas';

// console.log(Nebulas)

var Neb = Nebulas.Neb; // Neb
var neb = new Neb(new Nebulas.HttpRequest("https://testnet.nebulas.io"));
var Account = Nebulas.Account;

console.log("\n\n")
console.log(neb)

var api = neb.api;


// 当前区块链状态
api.getNebState().then(function(state) {
    // 异步
    console.log("\n\n")
    console.log(state)
});


// 当前链上最新的区块信息
api.latestIrreversibleBlock().then(function(blockData) {
    // 异步
    console.log("\n\n")
    console.log(blockData)
});


api.getAccountState({address: "n1YLc2ndCuzS5hKthxvpBDtv1c1YPa6Pacw"}).then(function(state) {
    console.log("\n\n")
    console.log(state)
});


// n1qGHtVR16SDtuzM9KSGvxtpT9PpUfr8QaR
api.getAccountState({address: "n1qGHtVR16SDtuzM9KSGvxtpT9PpUfr8QaR"}).then(function(state) {
    console.log("\n\n")
    console.log(state)
});



var from = Account.NewAccount().getAddressString();
console.log("\n\n\n")
console.log(from)
console.log("\n\n\n")
var dappAddress = "n1qGHtVR16SDtuzM9KSGvxtpT9PpUfr8QaR"
var value = "0";
var nonce = "0"
var gas_price = "1000000"
var gas_limit = "2000000"
var callFunction = "get";
var callArgs = "[\"" + "liyuechun" + "\"]"; //in the form of ["args"]
var contract = {
    "function": callFunction,
    "args": callArgs
}

neb.api.call(from,dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
    console.log(resp)
}).catch(function (err) {
    //cbSearch(err)
    console.log("error:" + err.message)
})
