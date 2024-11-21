export function zeroMatrix(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let j = 0; j < cols; j++) {
    if (!matrix[0][j]) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < rows; i++) {
    if (!matrix[i][0]) {
      firstColHasZero = true;
      break;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (!matrix[i][j]) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    if (!matrix[i][0]) {
      for (let j = 1; j < cols; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 1; j < cols; j++) {
    if (!matrix[0][j]) {
      for (let i = 1; i < rows; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColHasZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}
