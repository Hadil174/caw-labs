// arrayUtils.js
function first(array, n) {
  if (array == null || n <= 0) return [];
  if (n == null) return array[0];
  return array.slice(0, n);
}

function last(array, n) {
  if (array == null) return [];
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}

function chunk(array, size) {
  if (!array || size <= 0) return [];
  const result = [];
  let i = 0;
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}

module.exports = { first, last, chunk };