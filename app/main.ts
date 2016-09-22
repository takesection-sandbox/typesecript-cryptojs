let cryptoJS: CryptoJS.CryptoJSStatic = require("crypto-js");

let key: string = "1234567890";
let message: string = "message";

let sig: string = cryptoJS.HmacSHA256(message, key).toString(cryptoJS.enc.Base64);

console.log(sig);
