function groceriesList() {
  // Create a new Map and populate it with the grocery items and their quantities
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}

export default groceriesList;
