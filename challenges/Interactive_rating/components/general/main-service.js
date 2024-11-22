class mainservice {
  getChildNode (nodeList, nodeName) {
    let childNod = {};
    nodeList.forEach(el => {
      if (el.nodeName === nodeName) childNod = el;
    });
    return childNod;
  }
}

export default new mainservice();