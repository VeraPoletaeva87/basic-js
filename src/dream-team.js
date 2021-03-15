const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let res = '';
let arr=[];
let count=0;
if (!members) {
  return false;
}
for (let i=0; i< members.length; i++) {
  if (typeof members[i] === 'string' ) {
    let str = members[i];
    str = str.trim();
    res = res + str[0].toUpperCase();
    count++;
  }
}
arr = res.split('');
arr = arr.sort();
return count? arr.join('') : false;
};
