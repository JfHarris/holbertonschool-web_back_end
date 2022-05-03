export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (let idx of array) {
    idx = appendString + idx;
    myArray.push(idx);
  }
  return array;
}
