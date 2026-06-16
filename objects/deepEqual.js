function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (Array.isArray(a) && Array.isArray(b)) return compareArrays(a, b);
  if (isObject(a) && isObject(b)) {
    return compareObjects(a, b);
  }
  return false;
}

function compareArrays(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (!deepEqual(a[i], b[i])) return false;
  }

  return true;
}

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!Object.hasOwn(obj2, key)) return false;

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

function isObject(value) {
  return value !== null && !Array.isArray(value) && typeof value === "object";
}
