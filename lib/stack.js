var equals = require('./common/equals');
var StackIterator = require('./iterator/stack_iterator');

/**
 * @constructor
 * @class         Stack
 * @param         compare         Compare function of comparing two values in the Stack.
 * @description
 *    Initializes the class variables.
 */
var Stack = function(compare) {
  this.values = [];
  this.top = 0;
  this.size = 0;
  this.compare = (typeof compare === "undefined") ? equals : compare;
};

/**
 * @function        Push
 * @param           object        Object of the data to be inserted into the Stack.
 * @param           callback      Reference to the Callback function.
 * @description
 *    Pushes a provided value onto the Stack.
 *    Increments top to point to the next available position on the stack.
 */
Stack.prototype.push = function(object, callback) {
  
  // Store the value onto the top of Stack, and increase the top.
  this.values[this.top++] = object;
  
  // Increase the size of the Stack.
  this.size++;
  
  // Execute the callback function, if provided also, execute only when callback is a type of function.
  if (typeof callback === "function") callback();
};


Stack.prototype.toString = function() {
  // Prepare the string to be returned.
  
};