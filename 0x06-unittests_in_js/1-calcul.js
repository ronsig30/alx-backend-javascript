function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  const operation = type.toUpperCase(); // Ensure case insensitivity

  if (operation === 'SUM') {
    return roundedA + roundedB;
  } if (operation === 'SUBTRACT') {
    return roundedA - roundedB;
  } if (operation === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  }
  throw new Error('Invalid operation type');
}

module.exports = calculateNumber;
