import { zeroMatrix } from '../../../../data-structures/array-strings/exercises/zeroMatrix';

describe('zeroMatrix', () => {
  it('should return a matrix where if an element is 0, its entire row and column are set to 0 1', () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9]
    ];

    zeroMatrix(matrix);

    const expected = [
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9]
    ];

    expect(matrix).toEqual(expected);
  });

  it('should return a matrix where if an element is 0, its entire row and column are set to 0 2', () => {
    const matrix = [
      [1, 0, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    zeroMatrix(matrix);

    const expected = [
      [0, 0, 0],
      [4, 0, 6],
      [7, 0, 9]
    ];

    expect(matrix).toEqual(expected);
  });

  it('should return a matrix where if an element is 0, its entire row and column are set to 0 3', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [0, 8, 9]
    ];

    zeroMatrix(matrix);

    const expected = [
      [0, 2, 3],
      [0, 5, 6],
      [0, 0, 0]
    ];

    expect(matrix).toEqual(expected);
  });
});
