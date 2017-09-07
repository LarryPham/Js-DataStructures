/**
 * Provides the js-implementation for a Tree Node.
 * @param {*} data        Object of the data to be stored into Binary Tree.
 * @param {*} left        Object of the node on the left of the current node.
 * @param {*} right       Object of the node on the right of the current node.
 */
var TreeNode = function (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};
/**
 * @function setLeft
 * @class    TreeNode
 * @param left
 */
TreeNode.prototype.setLeft = function (left) {
  this.left = left;      // Sets the left child.
};

/**
 * @function setRight
 * @class    TreeNode
 * @param right
 */
TreeNode.prototype.setRight = function (right) {
  this.right = right;
};

/**
 * @function  setData
 * @class     TreeNode
 * @param data
 */
TreeNode.prototype.setData = function (data) {
  this.data = data;      // Set the data of the current node.
};

/**
 * @function  getLeft
 * @class     TreeNode
 * @return    Object      Object of the node on the left of the current node.
 */
TreeNode.prototype.getLeft = function () {
  return this.left;     // Returns the object of the left child.
};

/**
 * @function  getRight
 * @class     TreeNode
 * @return    Object      Object of the node on the right of the current node.
 */
TreeNode.prototype.getRight = function () {
  return this.right;
};

/**
 * @function   getData
 * @class      TreeNode
 * @return     Object     Object of the data stored in the current node.
 */
TreeNode.prototype.getData = function () {
  return this.data;
};
// Add the TreeNode to module.exports
module.exports = TreeNode;