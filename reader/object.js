const StringNode = require('../node/string.js');
const ArrayNode = require('../node/array.js');
const TableNode = require('../node/table.js');
const DummyNode = require('../node/dummy.js');
const LinkNameDecorator = require('../decorator/linkName.js');

module.exports =  class ObjectReader {
  constructor() {
  }

  read(obj) {
    return obj2node(obj, '');
  }
  


}


function obj2node(obj, linkName) {
  var node;

  if (isPrimitive(obj)) {
    node = new StringNode(obj);
  } else if (Array.isArray(obj)) {
    const nodes = [];

    obj.forEach((item, i) => {
      if (Array.isArray(item)) {
        node = new DummyNode(obj2node(item, ''));
       
        nodes.push(node);
      } else {
        node = obj2node(item, `${linkName}[${i}]`);
        nodes.push(node);
      }
    });

    // empty array
    if (nodes.length === 0) {
      node = obj2node(null, `${linkName}[]`);
      nodes.push(node);
    }

    node = new ArrayNode(nodes);
  } else {
    var name;
    var tbl = [];
    var children = [];

    for (name in obj) {
      if (!obj.hasOwnProperty(name)) {
        continue;
      }

      var data = obj[name];

      if (isPrimitive(data)) {
        tbl.push([name, data]);
      } else {
        children.push(obj2node(data, name));
      }
    }

    if (tbl.length === 0) {
      node = new TableNode([[' ', ' ']], children);
    } else {
      node = new TableNode(tbl, children);
    }

  }

 

  return node;
}


function isPrimitive(d) {
  const type = typeof d;

  if (d === null || type === 'string' || type === 'number' || type === 'boolean') {
    return true;
  }

  return false;
}
