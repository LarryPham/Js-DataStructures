/**
 * @constructor
 * @class     ListNode
 * @param {*} data        Object of the data to be stored into List.
 * @param {*} next        Object of the node next in the list.
 */
var ListNode = function (data, next) {
  this.data = data;
  this.next = next;
};

/**
 * @function   setNext
 * @class       ListNode
 * @param next
 */
ListNode.prototype.setNext = function (next) {
  this.next = next;       // Sets the next node
};

/**
 * @function    getNext
 * @class       ListNode
 * @return      Object    Object of the node next to the current node.
 */
ListNode.prototype.getNext = function () {
  return this.next;
};

/**
 * @function    getData
 * @class       ListNode
 * @return      Object    Object of the data stored in the current node.
 */
ListNode.prototype.getData = function () {
  return this.data;       // Returns the object of the data in the current node.
};
// Add the ListNoe to module.exports
module.exports = ListNode;