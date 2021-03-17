const CustomError = require('../extensions/custom-error');

class ChainMaker {
  res = [];
  
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  
  addLink(value) {
    this.res.push(value && value.toString());
    return this;
  }
  
  removeLink(position) {
    if (typeof position !== 'number') {
      this.res = [];
      throw new Error('THROWN');
    }
    
    const index = position - 1;
    if (index < 0 || index > this.res.length) {
      this.res = [];
      throw new Error('THROWN');
    }
    
    this.res.splice(index, 1);
    return this;
  }
  
  reverseChain() {
    this.res = this.res.reverse();
    return this;
  }
  
  finishChain() {
    const result = this.res.map((value) => value === undefined ? '( )' : `( ${value} )`).join('~~');
    this.res = [];
    return result;
  }
}

module.exports = new ChainMaker();
