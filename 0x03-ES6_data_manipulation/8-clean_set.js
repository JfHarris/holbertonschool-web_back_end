export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || set.size === 0 || typeof (startString) !== 'string' || startString === '') {
    return '';
  }

  return Array.from(set)
    .filter((data) => typeof data === 'string' && data.startsWith(startString))
    .map((data) => data.slice(startString.length))
    .join('-');
}
