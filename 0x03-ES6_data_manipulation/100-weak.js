export const weakMap = new WeakMap();

// Define and export the queryAPI function
export function queryAPI(endpoint) {
  // Ensure endpoint is an object
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Get the current count from weakMap or initialize it to 0
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the weakMap
  weakMap.set(endpoint, count);

  // Check if the count has reached or exceeded 5 and throw an error if true
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
