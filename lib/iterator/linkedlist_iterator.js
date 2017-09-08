/**
 * @class     LinkedListIterator
 * @param linkedList          Object of the linked list whose iterator is being created.
 * @constructor
 * @description
 *    Initializes the class variables for the Iterator.
 */
var LinkedListIterator = function(linkedList) {
  this.current = linkedList.head;
};

/**
 * @function      HasNext
 * @class         LinkedListIterator
 * @return {boolean}                  True/False, whether the iterator has more elements
 * @description
 *    Checks whether the particular instance of LinkedList Iterator has any more elements to traverse.
 */
LinkedListIterator.prototype.hasNext = function() {
  return typeof this.current !== "undefined";
};

/**
 *
 */
LinkedListIterator.prototype.next = function() {

};

module.exports = LinkedListIterator;