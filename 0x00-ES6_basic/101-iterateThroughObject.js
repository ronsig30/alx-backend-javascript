export default function iterateThroughObject(reportWithIterator) {
  // Collect all employee names from the iterator
  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employee names with a ' | ' separator
  return employees.join(' | ');
}
