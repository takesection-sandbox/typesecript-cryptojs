var CryptoJS: CryptoJS.CryptoJSStatic = require('crypto-js');

function sign(message: string, key: string): string {
    return CryptoJS.HmacSHA256(message, key).toString(CryptoJS.enc.Base64);
}

const key: string = "1234567890";
const message: string = "message";

const sig: string = sign(message, key);

console.log(sig);
