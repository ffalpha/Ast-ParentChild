/**
 * Node
 *
 * A tree consists of nodes and links.
 * A node consists of the following fields:
 *
 * - id : auto increment ID.
 * - data : data which may be displayed.
 *          The data format is determined by the renderer.
 * - children : children of the node
 */


var curMaxId = 0;

module.exports = class Node {
  constructor(data, children, layout) {
    this.id = ++curMaxId;
    this.data = data;
    this.children = children;
  
    
  }

  
}
