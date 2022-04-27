function toFindDuplicates(array) {
 for (let i = 0; i < array.length; i++) {
   for (let j = i + 1; j < array.length; j++) {
     if (i != j) {
       if (array[i] === array[j]) {
         return 'the duplicate element is ' + array[i];
       }
     } else {
       return 'no duplicates found';
     }
   }
 }
 return array;
}
toFindDuplicates([1, 2, 3, 4, 4]);
