class Queue {
 constructor() {
   this.elements = {};
   this.head = 0;
   this.tail = 0;
 }
 enqueue(element) {
   this.elements[this.tail] = element;
   this.tail++;
 }
 dequeue() {
   const item = this.elements[this.head];
   delete this.elements[this.head];
   this.head++;
   return item;
 }
}

function findBin(n) {
 let results = [];
 let myQueue = new Queue();
 var s1, s2;
 myQueue.enqueue('1');
 for (var i = 0; i < n; i++) {
   // remove the first element in front of the queue
   results.push(myQueue.dequeue());
   s1 = results[i] + '0';
   s2 = results[i] + '1';

   myQueue.enqueue(s1);
   myQueue.enqueue(s2);
 }

 return results.filter((oddBinaryNum) => oddBinaryNum % 2 != 0);
}

console.log(findBin(10));
