// import Node from './node.js';
// import ArrayLayout from '../layout/array.js';
const Node = require('./node.js');
const ArrayLayout = require('../layout/array.js');
const defaultLayout = new ArrayLayout();

const MARGIN = 10;


module.exports = class ArrayNode extends Node {
  constructor(nodes, layout, options={}) {
    if (!layout) {
      layout = defaultLayout;
    }
    super(null, nodes, layout);
  }

  _render() {
  }
}
