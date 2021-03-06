class BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   */
  constructor(value = null) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  /**
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  setValue(value) {
    this.value = value;

    return this;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {
    // detach the left node
    if (this.left) {
      this.left.parent = null;
    }

    // Attach the node to the left
    this.left = node;

    // attach current node as parent
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    // detach the right node
    if (this.right) {
      this.right.parent = null;
    }

    // Attach the node to the right
    this.right = node;

    // attach current node as parent
    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * Returns all tree node values in order
   * @return {*[]}
   */
  orderInArray() {
    let tree = [];

    // recursively push left nodes
    if (this.left) {
      tree = tree.concat(this.left.orderInArray());
    }

    // push value of the node
    tree.push(this.value);

    // recursively push right nodes
    if (this.right) {
      tree = tree.concat(this.right.orderInArray());
    }

    return tree;
  }

  toString() {
    return this.orderInArray().toString();
  }
}


module.exports = BinaryTreeNode;
