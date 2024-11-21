import { sortStack } from '../../../../data-structures/stack-queues/exercises/sortStack';
import { Stack } from '../../../../data-structures/stack-queues/stack';

describe('sortStack', () => {
  it('should sort the stack in ascending order', () => {
    const arr = new Array(10).fill(0).map((_) => Math.floor(Math.random() * 20));
    const stack = new Stack<number>();
    arr.forEach((element) => stack.push(element));

    sortStack(stack);
    const stackArray = stack.toArray();
    const sortedArray = arr.sort((a, b) => a - b);

    expect(stackArray).toEqual(sortedArray);
  });
});
