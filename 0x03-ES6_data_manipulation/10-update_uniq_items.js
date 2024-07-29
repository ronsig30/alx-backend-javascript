function updateUniqueItems(map) {
  // Check if the input is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map and update quantities
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

export default updateUniqueItems;
