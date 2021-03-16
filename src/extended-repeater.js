const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  let count = options.repeatTimes || 0;
  let addStr = options.addition ? options.addition.toString() : '';
  let separator = options.separator ? options.separator.toString() : '+';
  let addRepeatTimes = options.additionRepeatTimes || 0;
  let addSeparator = options.additionSeparator ? options.additionSeparator : '';
  
  if (typeof str === 'object' && typeof options.addition === 'object') {
    addStr = `${options.addition}`;
    str = `${str}`;
  }
  
  if (options.addition == false) {
    addStr = 'false';
  }
  
  if (options.addition == null) {
    addStr = 'null';
  }
  
  if (options.addition && (!options.additionSeparator || options.additionSeparator === '') && options.additionRepeatTimes > 1) {
    addSeparator = '|';
  }
  
  if (count === 0) {
    return str+addStr;
  }
  
  if (count === 1 && !addStr && !separator) {
    return str;
  }
  
  if (count === 2 && !addRepeatTimes && !addSeparator) {
    return str+addStr+separator+str+addStr;
  }
  
  for (let i=0;i<count; i++) {
    res = res + str;
    for (let j=0;j<addRepeatTimes; j++) {
      res = res+addStr;
      if (j+1 !== addRepeatTimes) {
        res = res + addSeparator;
      }
    }
    if (i+1 !== count) {
      res = res + separator;
    }
  }
  return res;
};
  