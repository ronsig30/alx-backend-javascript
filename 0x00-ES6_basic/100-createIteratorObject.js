export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (index < employees.length) {
            const value = employees[index];
            index += 1; // Use index + 1 instead of index++
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
