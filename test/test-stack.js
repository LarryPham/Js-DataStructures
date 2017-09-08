var Stack = require('./../lib/stack');
var Common = require('./test-common');

/**
 * @function    Compare
 * @param   start           Value 1 to be compared
 * @param   end             Value 2 to be compared
 * @return  Integer         Value 1 is greater, equal or lesser to Value 2
 */
function stackCompare(start, end) {
  if (start < end) return -1;
  else if (start > end) return 1;
  else return 0;
}

var testStack = function() {
  Common.header("TESTING STACK");
  Common.subHeader("Test: Stack API");
  stackAPI();
  
  Common.subHeader("Test: Boundary Conditions");
  stackBoundary();
  
  Common.header("END: Testing Stack.");
};

var stackBoundary = function () {
  var cases = [];
  var stack = new Stack();
  
  if (typeof stack.pop !== "undefined") {
    cases.push("Case: pop() on an empty Stack should be undefined");
  }
  
  if (stack.size !== 0) {
    cases.push("Case: size() of an empty Stack should be zero");
  }
  
  if (!stack.isEmpty()) {
    cases.push("Case: isEmpty() of an empty Stack should be true");
  }
  
  printResult(cases);
};

var stackAPI = function() {
  var cases = [];
  var stack = new Stack();
  
  if (!(new Stack instanceof Stack)) {
    cases.push("Case: Instance of Stack is a Stack.");
  }
  
  if ({} instanceof Stack) {
    cases.push("Case: Instance of Object is not a Stack.");
  }
  
  if (typeof stack.push !== "function") {
    cases.push("Case: Instance of Object is not a Stack.");
  }
  
  if (typeof stack.pop !== "function")
    cases.push("Case: pop is a function");
  
  if (typeof stack.isEmpty !== "function")
    cases.push("Case: isEmpty is a function");
  
  if (typeof stack.size !== "function")
    cases.push("Case: size is a function");
  
  if (typeof stack.search !== "function")
    cases.push("Case: search is a function");
  
  if (typeof stack.iterator !== "function" )
    cases.push("Case: iterator is a function");
  
  if (typeof stack.toString !== "function")
    cases.push("Case: toString is a function");
  
  if (!(stack.values instanceof Array))
    cases.push("Case: values is an array");
  
  if (typeof stack.top !== "number")
    cases.push("Case: top is a number");
  
  if (typeof stack.compare !== "function")
    cases.push("Case: compare is a function (Default)");
  
  stack = new Stack(stackCompare);
  
  if (typeof stack.compare !== "function")
    cases.push("Case: compare is a function (User Provided)");
  
  printResult(cases);
};

var printResult = function(value) {
  if (value.length !== 0) {
    console.log("Following Test Case Failed: ");
    for (var count in value) {
      console.log(value[count]);
    }
  } else {
    console.log("All Test cases passed.");
  }
};

module.exports = testStack;