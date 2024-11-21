import { palindrome, palindromeReversingHalf, palindromeStack } from '../../../../data-structures/linked-lists/exercises/palindrome';
import { fromArray } from '../../../../data-structures/linked-lists/linkedList';

describe('palindrome', () => {
  describe('Traditional palindrome', () => {
    it('should return true if the linked list is a palindrome', () => {
      const head = fromArray([1, 2, 3, 2, 1]);

      const result = palindrome(head);
      const expected = true;

      expect(result).toBe(expected);
    });

    it('should return false if the linked list is not a palindrome', () => {
      const head = fromArray([1, 2, 3, 4, 5]);

      const result = palindrome(head);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('palindromeStack', () => {
    it('should return true if the linked list is a palindrome', () => {
      const head = fromArray([1, 2, 3, 2, 1]);

      const result = palindromeStack(head);
      const expected = true;

      expect(result).toBe(expected);
    });

    it('should return false if the linked list is not a palindrome', () => {
      const head = fromArray([1, 2, 3, 4, 5]);

      const result = palindromeStack(head);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('palindromeReversingHalf', () => {
    it('should return true if the linked list is a palindrome', () => {
      const head = fromArray([1, 2, 3, 2, 1]);

      const result = palindromeReversingHalf(head);
      const expected = true;

      expect(result).toBe(expected);
    });

    it('should return false if the linked list is not a palindrome', () => {
      const head = fromArray([1, 2, 3, 4, 5]);

      const result = palindromeReversingHalf(head);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('performance tests', () => {
    const firstHalf = Array.from({ length: 5000 }, (_) => Math.floor(Math.random() * 10));
    const secondHalf = [...firstHalf].reverse();
    const fullArray = [...firstHalf, ...secondHalf];
    const head = fromArray(fullArray);

    it('traditional palindrome vs palindromeStack vs palindromeReversingHalf', () => {
      const traditionalStart = performance.now();
      palindrome(head);
      const traditionalEnd = performance.now();
      const traditionalTime = traditionalEnd - traditionalStart;

      const stackStart = performance.now();
      palindromeStack(head);
      const stackEnd = performance.now();
      const stackTime = stackEnd - stackStart;

      const reversingHalfStart = performance.now();
      palindromeReversingHalf(head);
      const reversingHalfEnd = performance.now();
      const reversingHalfTime = reversingHalfEnd - reversingHalfStart;

      console.log('traditionalTime: ', traditionalTime);
      console.log('stackTime: ', stackTime);
      console.log('reversingHalfTime: ', reversingHalfTime);

      const times = {
        [traditionalTime]: 'traditional palindrome',
        [stackTime]: 'palindromeStack',
        [reversingHalfTime]: 'palindromeReversingHalf',
      };
      const winner = Math.min(traditionalTime, stackTime, reversingHalfTime);

      console.log(`The winner is: ${times[winner]} with ${winner}ms`);
    });
  });
});
