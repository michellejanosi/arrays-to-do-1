// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr, value) {
  const newArr = new Array(arr.length + 1);
  newArr[0] = value;

  for (let i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }

  return newArr;

  arr.unshift(value);
  return arr;
}

console.log(pushFront([5,7,2,3], 8))

// Pop Front
/* Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

Examples:

popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
 */

function popFront(arr) {
  const firstValue = arr[0];
  const newArray = new Array(arr.length - 1);

  for (let i = 1; i < arr.length; i++) {
    newArray[i - 1] = arr[i];
  }

  console.log(newArray);
  return firstValue;
}

console.log(popFront([0, 5, 10, 15]));

// Insert At
/* Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

Examples:

insertAt([100,200,5], 2, 311) => [100,200,311,5]
insertAt([9,33,7], 1, 42) => [9,42,33,7] */

function insertAt(arr, index, value) {
  for (let i = 0; i < arr.length; i++) {
    const newArray = new Array(arr.length + 1);
    let newIndex = 0;

    for (let i = 0; i < newArray.length; i++) {
      if (i === index) {
        newArray[i] = value;
      } else {
        newArray[i] = arr[newIndex];
        newIndex++;
      }
    }

    return newArray;
  }
}

console.log(insertAt([100, 200, 5], 2, 311));  // => [100,200,311,5]
