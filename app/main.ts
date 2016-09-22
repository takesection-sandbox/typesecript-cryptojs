let cryptoJS: CryptoJS.CryptoJSStatic = require("crypto-js");

function sign(message: string, key: string): string {
    return cryptoJS.HmacSHA256(message, key).toString(cryptoJS.enc.Base64);
}

let key: string = "1234567890";
let message: string = "message";

let sig: string = sign(message, key);

console.log(sig);
