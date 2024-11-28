const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return a + b;
    }
    if (type === 'SUBTRACT') {
      return a - b;
    }
    if (type === 'DIVIDE') {
      return a / b;
    }
    return 0;
  },
};

module.exports = Utils;
