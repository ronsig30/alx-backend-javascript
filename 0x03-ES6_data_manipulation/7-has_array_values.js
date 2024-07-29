function hasValuesFromArray(set, array) {
  // Check if the set and array are valid
  if (!(set instanceof Set) || !Array.isArray(array)) {
    return false;
  }

  // Use every to check if all elements of the array are in the set
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
