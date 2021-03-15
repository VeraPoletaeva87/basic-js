const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || !(typeof sampleActivity === 'string') || !parseInt(sampleActivity, 10) ||
    +sampleActivity <= 0 || +sampleActivity > 15) {
    return false;
  }
  
  return Math.ceil(- HALF_LIFE_PERIOD * Math.log2(sampleActivity / MODERN_ACTIVITY));
};
