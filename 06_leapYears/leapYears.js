const leapYears = function(year) {

  if (year % 100 === 0 && year % 400 !== 0){
    return false
  } if (year % 4 === 0){
    return true
 } else {
    return false
 }
};
// Leap year = divisible by 4, NOT divisible by 100 unless also divisible by 400
console.log(leapYears(1900))
// Do not edit below this line
module.exports = leapYears;
