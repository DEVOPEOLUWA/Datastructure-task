function QuickSort(arr) {
 if (arr.length <= 1) {
   return arr;
 }
 // selecting the last element as the pivot
 const pivotElement = arr[arr.length - 1];
 const leftArray = [];
 const rightArray = [];

 for (let i = 0; i < arr.length - 1; i++) {
   // if the number is less than the pivotElement,it shpuld be added to the left side of the array.
   if (arr[i] < pivotElement) {
     leftArray.push(arr[i]);
   }
   // otherwise,the number should be added in the rigthside of the array
   else {
     rightArray.push(arr[i]);
   }
 }
 // recusively running the function till the left and right side is completely sorted

 return [...QuickSort(leftArray), pivotElement, ...QuickSort(rightArray)];
}

const arr = [9, -3, 5, 2, 6, 8, -6, 1, 3];
console.log(QuickSort(arr));
