function promiseAll(iterable) {
  const promises = Array.from(iterable); // works with any iterable
  const results = new Array(promises.length);
  let settled = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item) // handles non-promise values
        .then((value) => {
          results[index] = value;
          settled++;
          if (settled === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}

async function fetchMultiple() {
  const [postOne, postTwo, postThree] = await promiseAll([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/todos/2"),
    fetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);

  console.log(postOne);
}
