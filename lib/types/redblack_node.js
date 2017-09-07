// Included the required libraries
var define = require('./../common/define');

/**
 * @constructor
 *
 * @param data    Object of the data to be stored into Red-Black Tree.
 * @param left    Object of the node on the left of the current node.
 * @param right   Object of the node on the right of the current node.
 * @param color   Color constant providing the color for the current node.
 */
var RedBlackNode = function(data, left, right, color) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.setColor(color);     // Set the color, by calling the function.
};

/**
 * @function    setLeft
 * @class       RedBlackNode
 * @param       left        Object of the node on the left of the current node.
 * @description
 *    Sets the left child of the current node to the provided object.
 */
RedBlackNode.prototype.setLeft = function(left) {
  this.left = left;       // Sets the left child.
};

/**
 * @function    setRight
 * @class       RedBlackNode
 * @param       right       Object of the node on the right of the current node.
 * @description
 *    Sets the right child of the current node to the provided object.
 */
RedBlackNode.prototype.setRight = function (right) {
  this.right = right;
};

/**
 * @function    setData
 * @class       RedBlackNode
 * @param       data        Object of the data to be inserted into the current node.
 * @description
 *  Sets the data of the current node to the provided object.
 */
RedBlackNode.prototype.setData = function (data) {
  this.data = data;       // Sets the data of the current node.
};

/**
 * @function    flipColor
 * @class       RedBlackNode
 * @description
 *    If the color of node is Red, make it Black.
 *    If the color of node is Black, make it Red.
 */
RedBlackNode.prototype.flipColor = function() {
  // Flip the color based on the current color of the node.
  this.color = (this.color === RedBlackNode._ID_NODE_COLOR_RED) ? RedBlackNode._ID_NODE_COLOR_BLACK : RedBlackNode._ID_NODE_COLOR_RED;
};

/**
 * @function    setColor
 * @class       RedBlackNode
 * @param color       Color to be set for the current node.
 */
RedBlackNode.prototype.setColor = function(color) {
  switch (color) {
    // Initialize the color of the node, depending on the color provided
    case RedBlackNode._ID_NODE_COLOR_BLACK:
      // If the color provided is black, initialize to Black
      this.color = RedBlackNode._ID_NODE_COLOR_BLACK;
      break;
    case RedBlackNode._ID_NODE_COLOR_RED:
      // If the color provides is red, initialize to Red
    default:
      // If invalid, or non-existent value is provided, initialize to red
      this.color = RedBlackNode._ID_NODE_COLOR_RED;
      break;
  }
};

/**
 * @function    getLeft
 * @class       RedBlackNode
 * @return      Object          Object of the node on the left of the current node.
 * @description
 *    Gets the left child of current node.
 */
RedBlackNode.prototype.getLeft = function () {
  return this.left;
};

/**
 * @function    getRight
 * @class       RedBlackNode
 * @return      Object          Object of the node on the right of the current node.
 * @description
 *    Gets the right child of current node.
 */
RedBlackNode.prototype.getRight = function() {
  return this.right;
};

/**
 * @function    getData
 * @class       RedBlackNode
 * @return      Object          Object of the data stored in the current node.
 */
RedBlackNode.prototype.getData = function () {
  return this.data;
};

/**
 * @function    getColor
 * @class       RedBlackNode
 * @return      Object          Color stored for the current node.
 */
RedBlackNode.prototype.getColor = function() {
  return this.color;
};

/**
 * @function    IsRed
 * @class       RedBlackNode
 * @param       node         Node whose color is to be verified/
 * @return      {boolean}    Whether the provided Node is Red or Black in color.
 * @description
 *    Undefined nodes are considered "Black" in color, so result is false.
 *    All valid node's color is compared with "Red" and appropriate result is returned.
 */
RedBlackNode.prototype.isRed = function (node) {
  // If the provided node is undefined, it's "Black".
  if (typeof node === "undefined") return false;
  
  // If the node is valid, compare it's color with "Red" and retuirn the appropriate result.
  return node.getColor() === RedBlackNode._ID_NODE_COLOR_RED;
};

// Define the two types of colors for nodes of Red-Black tree.
define(RedBlackNode, '_ID_NODE_COLOR_RED', 1);
define(RedBlackNode, '_ID_NODE_COLOR_BLACK', 2);

// Add the RedNodeBlack to module.exports
module.exports = RedBlackNode;