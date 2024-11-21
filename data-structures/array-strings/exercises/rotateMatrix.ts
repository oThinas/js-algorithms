export function rotateMatrix(matrix: number[][]): number[][] {
  const rotatedMatrix: number[][] = [];
  for (let row = 0; row < matrix.length; row++) {
    const newRow: number[] = [];
    for (let col = matrix.length - 1; 0 <= col; col--) {
      newRow.push(matrix[col][row]);
    }

    rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
}

export function rotateMatrixInPlace(matrix: number[][]): void {
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;

      const top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
}
