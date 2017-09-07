/**
 * Provides the functionality of defining Constants with provided "name", "value" to an "param" object.
 * @param {*} param [in] param    Object to which the constant is to be added.
 * @param {*} name  [in] name     Name of the constant.
 * @param {*} value [in] value    Value of the Constant.
 */
var define = function (param, name, value) {
  // Create a property with the identifier "name" and adds it to "object"
  Object.defineProperty(param, name, {
    value: value,          // Value of property
    writable: false,          // Property is not writable
    configurable: true,           // Property is not configurable
    enumerable: true            // Property is enumerable
  });
};

// Add the function "define" to module exports
module.exports = define;