import { EmptyStackException, FixedMultiStack, FullStackException } from '../../../../data-structures/stack-queues/exercises/threeInOne';

describe('ThreeInOne', () => {
  let stack: FixedMultiStack;

  beforeEach(() => {
    stack = new FixedMultiStack(2);
  });

  it('should initialize with empty stacks', () => {
    expect(stack.isEmpty(0)).toBe(true);
    expect(stack.isEmpty(1)).toBe(true);
    expect(stack.isEmpty(2)).toBe(true);
  });

  it('should push values to the stack', () => {
    stack.push(0, 1);
    expect(stack.peek(0)).toBe(1);

    stack.push(0, 2);
    expect(stack.peek(0)).toBe(2);
  });

  it('should pop values from the stack', () => {
    stack.push(0, 1);
    stack.push(0, 2);
    stack.push(1, 3);

    expect(stack.pop(0)).toBe(2);
    expect(stack.peek(1)).toBe(3);
  });

  it('should peek values from the stack', () => {
    stack.push(0, 1);
    expect(stack.peek(0)).toBe(1);
    stack.push(0, 2);
    expect(stack.peek(0)).toBe(2);
  });

  it('should check if the stack is empty', () => {
    expect(stack.isEmpty(0)).toBe(true);
    stack.push(0, 1);
    expect(stack.isEmpty(0)).toBe(false);
  });

  it('should check if the stack is full', () => {
    stack.push(0, 1);
    stack.push(0, 2);
    expect(stack.isFull(0)).toBe(true);
  });

  it('should throw an exception when pushing to a full stack', () => {
    stack.push(0, 1);
    stack.push(0, 2);

    expect(() => stack.push(0, 3)).toThrow(FullStackException);
  });

  it('should throw an exception when popping from an empty stack', () => {
    expect(() => stack.pop(0)).toThrow(EmptyStackException);
  });

  it('should throw an exception when peeking from an empty stack', () => {
    expect(() => stack.peek(0)).toThrow(EmptyStackException);
  });
});
