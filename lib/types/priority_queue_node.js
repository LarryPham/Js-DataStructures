/**
 * @file                priority_queue_node.js
 * @created             2017-Sep-07
 * @author              Larry Pham
 * @fileoverview
 *
 * <ul>
 *    <li>Provides the javascript implementation for a Priority Queue Node. </li>
 * </ul>
 */
/**
 * @constructor
 * @class               PriorityQueueNode
 *
 * @param data        Object of the data to be stored into the Priority Queue.
 * @param priority    Priority of the current data to be stored.
 */
var PriorityQueueNode = function (data, priority) {

  this.data = data;
  this.priority = priority;
};

/**
 * @function            setPriority
 * @class               PriorityQueueNode
 * @param               priority      Priority of the current node in the Priority Queue.
 *
 * @description
 * Sets the priority of the current node.
 */
PriorityQueueNode.prototype.setPriority = function (priority) {
  this.priority = priority;
};

/**
 * @function            getPriority
 * @class               PriorityQueueNode
 * @return              Integer       Priority of the current node in the PriorityQueue.
 *
 * @description
 * Gets the priority of the current node.
 */
PriorityQueueNode.prototype.getPriority = function () {
  return this.priority;       // Returns the priority of the current node.
};

/**
 * @function            getData
 * @class               PriorityQueue
 * @return              Object        Object of the data stored in the current node.
 */
PriorityQueueNode.prototype.getData = function () {
  return this.data;           // Returns the object of data in the current node.
};
/**
 * @function            compare
 * @class               PriorityQueueNode
 * @param               param         The Node / Data against which the current object is to be compared.
 * @return              Number        Result of the comparison of the data stored in the current node and one passed as parameter
 *
 * @description
 * Object is decided upon to be a PriorityQueue node or the data stored in it.
 */
PriorityQueueNode.prototype.compare = function(param) {
  // Data for comparison is decided on whether the passed object is a PriorityQueueNode or not.
  var compareData = param instanceof PriorityQueueNode ? param.data : param;
  
  // Compare the data against the value stored in the object and return the result.
  if (this.data === compareData) return 0;
  else if (this.data < compareData) return -1;
  else return 1;
};

// Add the PriorityQueueNode to module.exports
module.exports = PriorityQueueNode;