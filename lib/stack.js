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

/**
 * @function    Insert
 * @param object              Object of the data to be inserted into the Stack.
 * @param callback            Reference to the Callback function.
 * @description
 *    Synonym for push method, invoke the same to perform the necessary task.
 */
Stack.prototype.insert = function(object, callback) {
  
  // Call the push function to execute the desired functionality
  this.push(object, callback);
};

/**
 * @function    Pop
 * @class       Stack
 * @return      Object    Object stored on the top of Stack.
 * @description
 *    Pops the element from the top of Stack.
 *    Decrease top to point to the next available position on the Stack.
 */
Stack.prototype.pop = function () {
  // If the Stack's empty, return "undefined"
  if (this.top === 0)  return undefined;
  
  // Store the value on top of the Stack into a temporary variable.
  var topOfStack = this.values[this.top - 1];
  
  // Free up the memory used by the Object on top of Stack.
  // And, decrement the top of Stack to point to next available Object.
  delete this.values[--this.top];
  
  // Decrease the size of the Stack
  this.size--;
  
  // Return the value that was present on top of stack
  return topOfStack;
};
/**
 * @function        Remove
 * @return          Object         Object stored on the top of Stack.
 * @description
 *    Synonym for pop method, invokes the same to perform the necessary task.
 */
Stack.prototype.remove = function () {
  // Calls the push function to execute the desired functionality
  return this.pop();
};

/**
 * @function        IsEmpty
 * @class           Stack
 * @return {boolean}            True/False, whether the Stack is empty or not.
 * @description
 *    Checks whether the Stack is Empty or not, and returns the same.
 */
Stack.prototype.isEmpty = function() {
  // Returns whether the Stack is empty or not.
  return this.size === 0;
};

/**
 * @function  Search
 * @param data                Object of the data to be searched in the Stack.
 * @return {boolean}          True/False, depending on whether the data exists in the Stack.
 */
Stack.prototype.search = function (data) {
  for (var i = 0; i < this.top; i++) {
    // Loop through the stack from the first element till top
    
    // If the value to be searched and current value are same, return true
    if (this.compare(data, this.values[i]) === 0) return true;
  }
  return false;       // Unsuccessful search, Data not found in Stack.
};
/**
 * @function      Iterator
 * @class         Stack
 * @return {*|StackIterator}      Object of a Stack Iterator
 * @description
 *    Returns a new Stack Iterator on the current Instance of the Stack.
 */
Stack.prototype.iterator = function () {
  // Returns a new Stack Iterator with the current instance as input
  return new StackIterator(this);
};
/**
 * @function      ToString
 * @class         Stack
 * @return        String          A String providing the details to the Stack object.
 * @description
 *    This is an override method of the default toString
 *    Provides a String representationg of the Stack class in the required format.
 */
Stack.prototype.toString = function() {
  // Prepare the string to be returned.
  var returnString = "[ Size = " + this.top;
  returnString += "; Top = " + this.top;
  returnString += "; Content = " + this.values;
  returnString += "]";
  
  // Return the thus formed String
  return returnString;
};

// Add the Stack class to module.exports
module.exports = Stack;