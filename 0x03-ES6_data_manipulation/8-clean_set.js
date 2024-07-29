function cleanSet(set, startString) {
  // Check if the input is a Set and startString is a string
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Use Array.from to convert the Set to an array and process it
  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
