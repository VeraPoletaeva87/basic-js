const CustomError = require("../extensions/custom-error");

let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let matrix = [];


class VigenereCipheringMachine {
  mode = false;
  constructor(value) {
   // this.matrix = [];
    let alphTransform = alph;
    if (value !== false) {
      this.mode = true;
    }
    for (let i=0; i<26; i++) {
      matrix.push(alphTransform);
      const a = alphTransform[0];
      alphTransform = alphTransform.slice(1);
      alphTransform.push(a);
    }
  }
  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('THROWN');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let mesToEncrypt = '';
    for (let i=0; i<message.length;i++) {
      if (alph.indexOf(message[i]) !== -1 || message[i] === ' ') {
        mesToEncrypt = mesToEncrypt + message[i];
      }
    }
    console.log(mesToEncrypt);
    let keyStr='';
    let res='';
    let symCount = 0;
     // message = message.replace(/\s/g, '');
      while (keyStr.length < mesToEncrypt.length ) {
        for (let j=0;j< key.length; j++) {
          if (mesToEncrypt[keyStr.length] === ' ') {
            keyStr = keyStr + ' ' + key[j];
          } else {
            keyStr = keyStr + key[j];
          }
        }
      }
      
      keyStr = keyStr.slice(0,mesToEncrypt.length);
      console.log(keyStr);
       for (let i=0; i< message.length; i++) {
         if (alph.indexOf(message[i]) !== -1) {
           const indexX = alph.indexOf(message[i]);
           const indexY = alph.indexOf(keyStr[i]);
           res = res + matrix[indexY][indexX];
         } else {
          res = res + message[i];
         }
       }
       return res.toUpperCase();
  }    
  decrypt(message, key) {
    if (!(message && key)) {
      throw new Error('THROWN');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let mesToEncrypt = '';
    for (let i=0; i<message.length;i++) {
      if (alph.indexOf(message[i]) !== -1 || message[i] === ' ') {
        mesToEncrypt = mesToEncrypt + message[i];
      }
    }
    console.log(mesToEncrypt);
    let keyStr='';
    let res='';
    let symCount = 0;
    // message = message.replace(/\s/g, '');
    while (keyStr.length < mesToEncrypt.length ) {
      for (let j=0;j< key.length; j++) {
        if (mesToEncrypt[keyStr.length] === ' ') {
          keyStr = keyStr + ' ' + key[j];
        } else {
          keyStr = keyStr + key[j];
        }
      }
    }
  
    keyStr = keyStr.slice(0,mesToEncrypt.length);
    console.log(keyStr);
    for (let i=0; i< message.length; i++) {
      if (alph.indexOf(message[i]) !== -1) {
        const indexY = alph.indexOf(keyStr[i]); // ряд буквы ключевого слова
        const indexX = alph.indexOf(message[i]);
        
        res = res + matrix[indexY][indexX];
      } else {
        res = res + message[i];
      }
    }
    return res.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
