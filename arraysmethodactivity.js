// arrayMethodsActivity.js

// Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArray = arr1.concat(arr2);
console.log("Combined Array (concat):", combinedArray);
// Use push() to add an element "Kiwi" to the array fruits
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);
// Use unshift() to add two numbers 4 and 5 to the beginning of array1
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);
// Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits after pop:", fruits);
// Use shift() to remove the first element from array2
const array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift:", array2);
// Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Fruits after sort:", fruits);
// Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits (from index 1 to 3):", slicedFruits);
// Use splice() to insert and remove elements in the months array
const months = ["January", "February", "March", "April"];
months.splice(2, 1, "NewMonth1", "NewMonth2"); // Remove 1 element at index 2 and add 2 new elements
console.log("Months after splice:", months);
