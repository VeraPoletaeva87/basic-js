const CustomError = require("../extensions/custom-error");

let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let matrix = [];
let reverse=null;
let wasReverseEncr=false;

const a = "abcdefghijklmnopqrstuvwxyz";

const replace = (s, e) => {
  // console.log('s: ', s);
//  console.log('e: ', e);
  
  let newE = [];
  let j = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (j === e.length) {
      j = 0;
    }
    
    //  console.log('i: ', i);
    // console.log('j: ', j);
    const sChar = s[i];
    // console.log('sChar: ', sChar);
    
    if (a.indexOf(sChar) === -1) {
      //   console.log('not alphabetical symbol')
      newE.push(sChar);
    } else {
      //  console.log('alphabetical symbol')
      newE.push(e[j]);
      j++;
    }
  }
  return newE.join('');
}

class VigenereCipheringMachine {
  constructor(value) {
   // this.matrix = [];
    let alphTransform = alph;
    if (value === false) {
      reverse = true;
    }
    for (let i=0; i<26; i++) {
      matrix.push(alphTransform);
      const a = alphTransform[0];
      alphTransform = alphTransform.slice(1);
      alphTransform.push(a);
    }
  }
  encrypt(message, key) {
    console.log(message + ' - '+key);
    if (!(message && key)) {
      throw new Error('THROWN');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let mesToEncrypt = message;
    // for (let i=0; i<message.length;i++) {
    //   if (alph.indexOf(message[i]) !== -1 || message[i] === ' ') {
    //     mesToEncrypt = mesToEncrypt + message[i];
    //   }
    // }
   // console.log('mes to enc-'+mesToEncrypt);
    let keyStr='';
    let res='';
    let symCount = 0;
     // message = message.replace(/\s/g, '');
    
      // while (keyStr.length < mesToEncrypt.length ) {
      //   let countKey=0;
      //   for (let j=0;j< key.length; j++) {
      //     if (alph.indexOf(mesToEncrypt[keyStr.length]) === -1) {
      //       if (mesToEncrypt[keyStr.length] === ' ') {
      //         keyStr = keyStr + mesToEncrypt[keyStr.length] + key[j];
      //       } else {
      //         keyStr = keyStr + mesToEncrypt[countKey];
      //       }
      //     } else {
      //       keyStr = keyStr + key[j];
      //       countKey++;
      //     }
      //   }
      // }
    
      
      
      //keyStr = keyStr.slice(0,mesToEncrypt.length);
      keyStr = replace(message,key);
      
      console.log('keystr-'+keyStr);
       for (let i=0; i< message.length; i++) {
         if (alph.indexOf(message[i]) !== -1) {
           const indexX = alph.indexOf(message[i]);
           const indexY = alph.indexOf(keyStr[i]);
           res = res + matrix[indexY][indexX];
         } else {
          res = res + message[i];
         }
       }
       if (reverse ===true || reverse === null) {
        // console.log('enc res= '+res.toUpperCase());
         return res.toUpperCase();
       } else {
         let revRes='';
         for (let i=0;i<res.length;i++) {
           revRes = revRes + res[res.length-i-1];
         }
         wasReverseEncr=true;
         console.log('enc revres= '+wasReverseEncr);
         return revRes.toUpperCase();
       }
       
  }    
  decrypt(message, key) {
    console.log(message + ' - '+key);
    if (!(message && key)) {
      throw new Error('THROWN');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let mesToEncrypt = message;
    // for (let i=0; i<message.length;i++) {
    //   if (alph.indexOf(message[i]) !== -1 || message[i] === ' ') {
    //     mesToEncrypt = mesToEncrypt + message[i];
    //   }
    // }
   // console.log(mesToEncrypt);
    let keyStr='';
    let res='';
    let symCount = 0;
    // message = message.replace(/\s/g, '');
    // while (keyStr.length < mesToEncrypt.length ) {
    //   let countKey=0;
    //   for (let j=0;j< key.length; j++) {
    //     if (alph.indexOf(mesToEncrypt[keyStr.length]) === -1) {
    //       if (mesToEncrypt[keyStr.length] === ' ') {
    //         keyStr = keyStr + mesToEncrypt[keyStr.length] + key[j];
    //       } else {
    //         keyStr = keyStr + mesToEncrypt[countKey];
    //       }
    //     } else {
    //       keyStr = keyStr + key[j];
    //       countKey++;
    //     }
    //   }
    // }
    //
    // keyStr = keyStr.slice(0,mesToEncrypt.length);
    keyStr = replace(message,key);
    
    console.log('decr key: '+keyStr);
    if ((reverse ===true || reverse === null) && wasReverseEncr) {
      wasReverseEncr=false;
      console.log('reverse str to decrypt!');
      let revRes='';
      for (let i=0;i<message.length;i++) {
        if (alph.indexOf(message[i]) !== -1) {
          revRes = revRes + message[message.length - i - 1];
        } else {
          revRes = revRes + message[i];
        }
      }
      message = revRes;
    }
    console.log('message to decrypt ' +message);
    for (let i=0; i< message.length; i++) {
      if (alph.indexOf(message[i]) !== -1) {
        const indexY = alph.indexOf(keyStr[i]);  // ряд буквы ключевого слова
        const indexX = matrix[indexY].indexOf(message[i]);
        
        
        res = res + alph[indexX];
      } else {
        res = res + message[i];
      }
    }
    if (reverse ===true || reverse === null) {
     // console.log('decr res= '+res.toUpperCase());
      return res.toUpperCase();
    } else {
      let revRes='';
      for (let i=0;i<res.length;i++) {
        revRes = revRes + res[res.length-i-1];
      }
      console.log('decr revres= '+revRes.toUpperCase());
      return revRes.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
