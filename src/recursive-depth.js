const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr, lvl = 1) {
    let max = lvl;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (Array.isArray(el)) {
        const deep = this.calculateDepth(el, lvl + 1);
        if (deep > max) {
          max = deep;
        }
      }
    }
    return max;
  }
};