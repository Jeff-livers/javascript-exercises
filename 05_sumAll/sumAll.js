const sumAll = function(min,max) {
    let counter = 0;
    if (!Number.isInteger(min) || min < 0) {
        return 'ERROR';
      }
    if (!Number.isInteger(max) || max < 0) {
        return 'ERROR';
    }
    if(min < max){
        for(let i = min; i <= max; i++){
            counter+=i;
        }
    } else {
        for(let i = max; i <= min; i++){
            counter+=i;
        }
    }
    return counter
}
console.log(sumAll(-5,4))

// Do not edit below this line
module.exports = sumAll;
