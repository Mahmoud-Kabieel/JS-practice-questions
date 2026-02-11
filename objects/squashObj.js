// const object = {
//   a: 5,
//   b: 6,
//   c: {
//     f: 9,
//     g: {
//       m: 17,
//       n: 3,
//     },
//   },
// };

const targetObject = {
  name: "mahmoud",
  age: 21,
  roles: {
    ai: "Machine learning",
    swe: "Full stack",
  },
};

function squashObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      squashObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

let sqObj = squashObject(targetObject);

console.log(sqObj);
