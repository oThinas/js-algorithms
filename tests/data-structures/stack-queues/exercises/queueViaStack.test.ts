import { QueueViaStack } from '../../../../data-structures/stack-queues/exercises/queueViaStack';

describe('QueueViaStack', () => {
  let queue: QueueViaStack<number>;

  beforeEach(() => {
    queue = new QueueViaStack<number>();
  });

  it('should initialize an empty queue', () => {
    expect(queue.size()).toBe(0);
  });

  it('should add elements to the queue', () => {
    queue.add(1);
    expect(queue.size()).toBe(1);

    queue.add(2);
    expect(queue.size()).toBe(2);
  });

  it('should peek at the front element of the queue', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
  });

  it('should remove elements from the queue', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.remove()).toBe(1);
    expect(queue.size()).toBe(1);
    expect(queue.remove()).toBe(2);
  });

  it('should shift elements between stacks correctly', () => {
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);

    queue.add(4);
    expect(queue.peek()).toBe(3);
    expect(queue.remove()).toBe(3);
    expect(queue.peek()).toBe(4);
  });
});
