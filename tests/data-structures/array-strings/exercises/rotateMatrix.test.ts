import { rotateMatrix, rotateMatrixInPlace } from '../../../../data-structures/array-strings/exercises/rotateMatrix';

describe('rotateMatrix', () => {
  describe('rotateMatrix with extra space', () => {
    it('should rotate a 2x2 matrix', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];

      const result = rotateMatrix(matrix);
      const expected = [
        [3, 1],
        [4, 2],
      ];

      expect(result).toEqual(expected);
    });

    it('should rotate a 3x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      const result = rotateMatrix(matrix);
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ];

      expect(result).toEqual(expected);
    });

    it('should rotate a 4x4 matrix', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];

      const result = rotateMatrix(matrix);
      const expected = [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('rotateMatrix in place', () => {
    it('should rotate a 2x2 matrix', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];

      rotateMatrixInPlace(matrix);
      const expected = [
        [3, 1],
        [4, 2],
      ];

      expect(matrix).toEqual(expected);
    });

    it('should rotate a 3x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      rotateMatrixInPlace(matrix);
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ];

      expect(matrix).toEqual(expected);
    });

    it('should rotate a 4x4 matrix', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];

      rotateMatrixInPlace(matrix);
      const expected = [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ];

      expect(matrix).toEqual(expected);
    });
  });
});
