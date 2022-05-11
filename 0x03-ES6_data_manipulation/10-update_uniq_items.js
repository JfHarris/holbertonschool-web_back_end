export default function updateUniqueItems(gList) {
  if (!(gList instanceof Map)) {
    throw TypeError('Cannot process');
  }
  gList.forEach((value, key) => {
    if (value === 1) {
      gList.set(key, 10);
    }
  });
  return gList;
}
