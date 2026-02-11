// Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

function flatten(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, [2, [3]]];
let result = flatten(arr);

console.log(result); // [1, 2, 3]
