import { Queue } from '../../../data-structures/stack-queues/queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('should be empty when initialized', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('should add items to the queue', () => {
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
  });

  it('should remove items from the queue', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return null when removing from an empty queue', () => {
    expect(queue.remove()).toBe(null);
  });

  it('should return the first item without removing it', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
    expect(queue.remove()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  it('should return null when peeking an empty queue', () => {
    expect(queue.peek()).toBe(null);
  });
});
