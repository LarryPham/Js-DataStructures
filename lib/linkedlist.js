var ListNode = require('./types/list_node');
var equals   = require('./common/equals');
var LinkedListIterator = require('./iterator/linkedlist_iterator');

var LinkedList = function(compare) {
  this.head = undefined;
  this.tail = undefined;
  this.size = 0;
  this.compare = (typeof compare === "undefined") ? equals : compare;
};

/**
 * @function    InsertFront
 * @param data                Object of the data to be inserted into the LinkedList.
 * @param callback            Reference to the callback function.
 * @description
 *    Inserts a new node with the provided data in the front of the LinkedList.
 */
LinkedList.prototype.insertFront = function(data, callback) {
  // Create a new Linked Node, with the provided data and Head of the List as next Node.
  var newListNode = new ListNode(data, this.head);
  
  this.size++;
  this.head = newListNode;
  
  // If the End of this list is undefined, this is a first node in the list.
  if (typeof this.tail === "undefined") this.tail = newListNode;
  
  // Execute the callback function, if provided
  // Also, execute only when callback is a type of function.
  if (typeof callback === "function") callback();
};
/**
 * @function      InsertEnd
 * @param data              Object of the data to be inserted into the linked list.
 * @param callback          Reference to the callback function.
 * @description
 *    Inserts a new node with the provided data in the end of the Linked List.
 */
LinkedList.prototype.insertEnd = function(data, callback) {
  // Create a new LinkedNode, with the provided data and undefined as next node.
  var newListNode = new ListNode(data, undefined);
  
  this.size++;
  this.tail.setNext(newListNode);
  this.tail = newListNode;
  
  // If the Head of list is undefined, this is the first node in the list.
  // Update the Head of list to point to the new node.
  if (typeof this.head === "undefined") this.head = newListNode;
  
  // Execute the callback function, if provided
  // Also, execute only when the callback is type of function.
  if (typeof callback === "function") callback();
};
/**
 * @function      InsertAt
 * @param data              Object of the data to be inserted into the LinkedList.
 * @param location          Location at which the data needs to be inserted.
 * @param callback          Reference to the callback function.
 * @description
 *    Inserts a new node with the provided data at the provided location in the linked list.
 *    If the location doesn't exists in the list, Insert in the end of list.
 */
LinkedList.prototype.insertAt = function(data, location, callback) {
  if (location > this.size) {
    this.insertEnd(data, callback);
    return;
  }
  
  var newListNode;              // Declare a variable for the new node in the list.
  var tempLoc = 1;             // Initialize the location to 1
  var currentNode = this.head;  // Initialize the currentNode to head of list
  var parentNode = undefined;   // Initialize the parentNode to undefined.
  
  while (tempLoc < location) {
    parentNode = currentNode;
    currentNode = currentNode.getNext();
    tempLoc++;
  }
  
  newListNode = new ListNode(data, currentNode);
  this.size++;
  
  if (typeof parentNode !== "undefined") parentNode.setNext(newListNode);
  if (typeof callback === "function") callback();
};

/**
 * @function        Search
 * @param           data        Object of the data to be searched in the linked list.
 * @return {boolean}
 */
LinkedList.prototype.search = function(data) {
  // currentNode is initialized with the head of the list.
  var currentNode = this.head;
  while (typeof currentNode !== "undefined") {
    // Loop until all the nodes in the linked list are not processed
    
    // If the value to be searched and value in the current node are same, return true
    if (this.compare(currentNode.getData(), data) === 0) return true;
    
    // If the comparison is unsuccessful, move to the next node in the list.
    currentNode = currentNode.getNext();
  }
  return false;
};

/**
 * @function      Iterator
 * @class         LinkedList
 * @return        Object          Object of Linked List Iterator.
 * @description
 *    Returns a new LinkedList Iterator on the current instance of the LinkedList.
 */
LinkedList.prototype.iterator = function() {
  
  // Return a new LinkedList Iterator on the current instance of the LinkedList.
  return new LinkedListIterator(this);
};

/**
 * @fuction   ToString
 * @class     LinkedList
 * @return    String          A String providing the details to the LinkedList Object.
 * @description
 *    This is an overriden method of the default toString
 *    Provides a String representation of the LinkedList class in the required format.
 */
LinkedList.prototype.toString = function() {
  var current = this.head;
  
  // Prepare the string to be returned
  var returnString = "";
  returnString += "[ Size = " + this.size;
  returnString += "; Values = " + current.getData();
  current = current.getNext();
  
  while (typeof current !== "undefined") {
    // Loop until all the nodes in the list are not traversed
    returnString += ", " + current.getData(); // Attach data in the node to returnString
    current = current.getNext();
  }
  returnString += "] ]";
  
  // Return the thus formed String
  return returnString;
};
// Add the LinkedList class to module.exports
module.exports = LinkedList;