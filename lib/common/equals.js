/**
 * Compares the two data objects and return appropriate number
 *
 * @param {*} lhs     Object of the first data.
 * @param {*} rhs     Object of the second data.
 */
var equals = function (lhs, rhs) {
  if (lhs === rhs) return 0;
  else if (lhs < rhs) return -1;
  else return 1;
};
// Add the equals fucntion to module.exports
module.exports = equals;