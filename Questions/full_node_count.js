function countNodes(rootNode, nodeCount) {
 let nodeCount = 0;
 let children = rootNode.children;
 for (let i = 0; i < children; i++);
 {
   if (countFullChildren(children[i]) == 2) {
     nodeCount++;
   }
   nodeCount += countNodes(children[i], nodeCount);
 }
 return nodeCount;
}

function countFullChildren(rootNode) {
 if (rootNode.children == 0) {
   return 1;
 } else {
   let nodeCount = 0;
   var children = nodeElement.children;
   for (var c = 0; c < children; c++) {
     nodeCount += countFullChildren(children[c], nodeCount + 1);
   }
   return nodeCount;
 }
}