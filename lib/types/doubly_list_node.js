/**
 * Provides the javascript implementaion for a Doubly List Node
 *
 * @constructor   DoublyListNode
 * @param {*} data            Object of the data to be stored into List.
 * @param {*} next            Object of the node next in the list.
 * @param {*} prev            Object of the node previous in the list.
 * @description
 * <ul>
 *  <li>Initializes the class variables with the provided values. </li>
 * </ul>
 */
var DoublyListNode = function (data, next, prev) {
  this.data = data;
  this.next = next;
  this.prev = prev;
};
/**
 * @function  setNext
 * @class     DoublyListNode
 * @param next
 */
DoublyListNode.prototype.setNext = function (next) {
  this.next = next;     // Sets the next node.
};

/**
 * @function  setPrev
 * @class     DoublyListNode
 * @param prev
 */
DoublyListNode.prototype.setPrev = function (prev) {
  this.prev = prev;
};
/**
 * @function  getNext
 * @class     DoublyListNode
 * @return    Object        Object of the node next to the current node into the List.
 */
DoublyListNode.prototype.getNext = function () {
  return this.next;
};

/**
 * @function  getPrev
 * @class     DoublyListNode
 * @return    Object        Object of the node previous to the current node into the List.
 */
DoublyListNode.prototype.getPrev = function () {
  return this.prev;
};

/**
 * @function  setData
 * @class     DoublyListNode
 * @param data
 */
DoublyListNode.prototype.setData = function (data) {
  this.data = data;
};

/**
 * @function  getData
 * @class     DoublyListNode
 * @return    Object      Object of the data stored in the current node.
 */
DoublyListNode.prototype.getData = function () {
  return this.data;         // Returns the object of the data in the current node.
};
// Add the DoublyListNdoe to module.exports
module.exports = DoublyListNode;