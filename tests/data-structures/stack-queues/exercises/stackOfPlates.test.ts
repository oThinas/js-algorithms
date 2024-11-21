import { SetOfStacks } from '../../../../data-structures/stack-queues/exercises/stackOfPlates';

describe('Stack of Plates', () => {
  let setOfStacks: SetOfStacks;

  beforeEach(() => {
    setOfStacks = new SetOfStacks(2);
  });

  it('should initialize with an empty stack and given capacity', () => {
    expect(setOfStacks).toBeDefined();
    expect(setOfStacks['stacks'].length).toBe(1);
    expect(setOfStacks['capacity']).toBe(2);
    expect(setOfStacks['stacksLength']).toEqual([0]);
    expect(setOfStacks.isEmpty()).toBe(true);
  });

  it('should push elements and create new stacks when capacity is reached', () => {
    setOfStacks.push(1);
    setOfStacks.push(2);
    expect(setOfStacks['stacks'].length).toBe(1);
    expect(setOfStacks['stacksLength']).toEqual([2]);

    setOfStacks.push(3);
    expect(setOfStacks['stacks'].length).toBe(2);
    expect(setOfStacks['stacksLength']).toEqual([2, 1]);
  });

  it('should pop elements and delete stacks when empty', () => {
    setOfStacks.push(1);
    setOfStacks.push(2);
    setOfStacks.push(3);
    expect(setOfStacks['stacks'].length).toBe(2);

    expect(setOfStacks.pop()).toBe(3);
    expect(setOfStacks['stacks'].length).toBe(1);
    expect(setOfStacks.pop()).toBe(2);
    expect(setOfStacks.pop()).toBe(1);
    expect(setOfStacks.isEmpty()).toBe(true);
    expect(setOfStacks['stacks'].length).toBe(1);
  });

  it('should pop elements at a specific stack and shift elements', () => {
    setOfStacks.push(1);
    setOfStacks.push(2);
    setOfStacks.push(3);
    setOfStacks.push(4);
    expect(setOfStacks.popAt(0)).toBe(2);
    expect(setOfStacks.popAt(0)).toBe(3);
    expect(setOfStacks.popAt(0)).toBe(4);
    expect(setOfStacks.popAt(0)).toBe(1);
  });

  it('should remove the stack when it is empty', () => {
    setOfStacks.push(1);
    setOfStacks.push(2);
    setOfStacks.push(3);
    expect(setOfStacks.popAt(1)).toBe(3);
    expect(setOfStacks['stacks'].length).toBe(1);
    expect(setOfStacks['stacksLength']).toEqual([2]);
  });

  it('should throw an error when index is out of bounds', () => {
    setOfStacks.push(1);
    setOfStacks.push(2);
    setOfStacks.push(3);
    setOfStacks.push(4);
    expect(() => setOfStacks.popAt(2)).toThrow('Index out of bounds');
  });

  it('should peek the top element of the last stack', () => {
    setOfStacks.push(1);
    setOfStacks.push(2);
    expect(setOfStacks.peek()).toBe(2);


    setOfStacks.push(3);
    expect(setOfStacks.peek()).toBe(3);
  });

  it('should return true if all stacks are empty', () => {
    expect(setOfStacks.isEmpty()).toBe(true);

    setOfStacks.push(1);
    expect(setOfStacks.isEmpty()).toBe(false);

    setOfStacks.pop();
    expect(setOfStacks.isEmpty()).toBe(true);
  });
});
