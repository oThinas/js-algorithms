import { StackWithMin } from '../../../../data-structures/stack-queues/exercises/stackMin';

describe('stackMin', () => {
  let stack: StackWithMin;

  beforeEach(() => {
    stack = new StackWithMin();
  });

  describe('push', () => {
    it('should push a single element and set min correctly', () => {
      stack.push(5);
      expect(stack.isEmpty()).toBe(false);
      expect(stack.min()).toBe(5);
    });

    it('should push multiple elements and set min correctly', () => {
      stack.push(5);
      stack.push(6);
      stack.push(3);
      stack.push(7);
      expect(stack.min()).toBe(3);
    });

    it('should throw an error when pushin an invalid argument', () => {
      expect(() => stack.push({ value: 5, min: 5 })).toThrow('Invalid argument');
    });
  });

  describe('min', () => {
    it('should return MAX_SAFE_INTEGER when stack is empty', () => {
      expect(stack.min()).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should return the correct min after pushing elements', () => {
      stack.push(5);
      stack.push(3);
      stack.push(7);
      expect(stack.min()).toBe(3);
    });

    it('should return the correct min after popping elements', () => {
      stack.push(5);
      stack.push(6);
      stack.push(3);
      stack.push(7);
      expect(stack.min()).toBe(3);
      stack.pop();
      stack.pop();
      expect(stack.min()).toBe(5);
    });
  });
});
