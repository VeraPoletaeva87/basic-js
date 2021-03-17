const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {
    turns: 0,
    seconds: 0
  };
  let turns=0;
  let time = 0;
  turns = Math.pow(2,disksNumber) - 1;
  time = Math.floor(turns/(turnsSpeed/3600));
  res.turns = turns;
  res.seconds = time;
  return res;
};
