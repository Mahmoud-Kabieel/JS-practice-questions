// function deepOmit(obj, keysToOmit) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map((item) => deepOmit(item, keysToOmit));
//   }

//   const result = {};

//   for (const key in obj) {
//     if (!keysToOmit.includes(key)) {
//       result[key] = deepOmit(obj[key], keysToOmit);
//     }
//   }

//   return result;
// }

const targetObject = {
  name: "mahmoud",
  age: 21,
  roles: {
    ai: "Machine learning",
    swe: "Full stack",
  },
  skills: ["JavaScript", "React"],
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
