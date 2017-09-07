/**
 * Provides functionality of exchanging two values in a list.
 * @param {*} param         Object in which the exchange is to be performed.
 * @param {*} first         Index 1 to be exchanged.
 * @param {*} second        Index 2 to be exchanged.
 */
var exchange = function (param, first, second) {
  var tempValue;
  
  if (typeof param === "Array") {
    // If the provided list of values is an Array, Swap the values at the two indexes.
    tempValue = param[first];
    param[first] = param[second];
    param[second] = tempValue;
  }
};
// Add the function "exchange" to module exports
module.exports = exchange;