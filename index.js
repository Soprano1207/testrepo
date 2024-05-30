export function matrixWeight(matrix) {
  if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
      throw new Error('Входные данные должны быть двумерным массивом.');
  }

  return matrix.reduce((totalWeight, row) => {
      return totalWeight + row.reduce((rowSum, element) => rowSum + element, 0);
  }, 0);
}
