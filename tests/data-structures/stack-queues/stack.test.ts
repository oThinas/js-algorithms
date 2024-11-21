import { Stack } from '../../../data-structures/stack-queues/stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('should be empty when initialized', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should push items onto the stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(1);
  });

  it('should pop items from the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return null when popping from an empty stack', () => {
    expect(stack.pop()).toBe(null);
  });

  it('should return the top item without removing it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  it('should return null when peeking an empty stack', () => {
    expect(stack.peek()).toBe(null);
  });

  it('should convert the stack to an array', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });

  it('should create a stack from an array', () => {
    const newStack = new Stack<number>().fromArray([3, 2, 1]);
    expect(newStack.toArray()).toEqual([1, 2, 3]);
  });

  it('should return the size of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  });
});
