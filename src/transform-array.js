const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let doubleNext = false;
  let arrToTrans = [];
  if (!(arr instanceof Array)) {
    throw new Error('THROWN');
  }
  if (arr.length === 0) {
    return arrToTrans;
  }
  for (let i=0; i< arr.length; i++) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      arrToTrans.push(arr[i]);
      if (doubleNext) {
        arrToTrans.push(arr[i]);
        doubleNext = false;
      }
    } else {
      switch (arr[i]) {
        case '--discard-next' : { i++; break }
        case '--discard-prev' : { if (i > 0 && arr[i-2]!=='--discard-next') {arrToTrans.pop();} break }
        case '--double-next' : { doubleNext = true; break}
        case '--double-prev' : { if (i > 0 && arr[i-2]!=='--discard-next') {arrToTrans.push(arr[i-1]);} break }
      }
    }
  }
  return arrToTrans;
};
