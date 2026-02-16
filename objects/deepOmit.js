function deepOmit(obj, keysToOmit) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepOmit(item, keysToOmit));
  }

  const result = {};

  for (const key in obj) {
    if (!keysToOmit.includes(key)) {
      result[key] = deepOmit(obj[key], keysToOmit);
    }
  }

  return result;
}
