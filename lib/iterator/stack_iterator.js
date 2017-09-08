/**
 *
 * @class         StackIterator
 * @param stack                 Object of the stack whose iterator is being created.
 * @constructor
 * @description
 *    Initializes the class variables for the Iterator.
 */
var StackIterator = function(stack) {
  this.size = stack.top;
  this.values = stack.values;
  this.current = 0;
};

/**
 * @function        HasNext
 * @class           StackIterator
 * @return          Boolean        True/False, whether the iterator has more elements.
 * @description
 *    Checks whether the particular instance of Stack iterator has any more elements to traverse
 */
StackIterator.prototype.hasNext = function() {
  
  // Returns whether there are any more elements to traverse in the stack.
  return this.current !== this.size;
};

/**
 * @function        Next
 * @class           StackIterator
 * @return          Object            Object of the data stored at the next location in Stack.
 * @description
 *    Returns the next data object stored on Stack.
 */
StackIterator.prototype.next = function () {
  // If the current pointer location is same as the size of stack, return undefined
  if (this.current === this.size) return undefined;
  
  // Returns the data object stored on stack, and increase the counter
  return this.values[this.current++];
};
module.exports = StackIterator;