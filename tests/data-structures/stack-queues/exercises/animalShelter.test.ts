import { AnimalShelter, Cat, Dog } from '../../../../data-structures/stack-queues/exercises/animalShelter';

describe('Animal Shelter', () => {
  let shelter: AnimalShelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  it('should enqueue dogs and cats correctly', () => {
    const dog1 = new Dog('dog1');
    const cat1 = new Cat('cat1');

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);

    expect(shelter.dequeueDogs().getName()).toBe('dog1');
    expect(shelter.dequeueCats().getName()).toBe('cat1');
  });

  it('should dequeue the oldest animal first: 1', () => {
    const dog1 = new Dog('dog1');
    const cat1 = new Cat('cat1');
    const dog2 = new Dog('dog2');

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeueAny().getName()).toBe('dog1');
    expect(shelter.dequeueAny().getName()).toBe('cat1');
    expect(shelter.dequeueAny().getName()).toBe('dog2');
  });

  it('should dequeue the oldest animal first: 2', () => {
    const cat1 = new Cat('cat1');
    shelter.enqueue(cat1);

    expect(shelter.dequeueAny().getName()).toBe('cat1');
  });

  it('should dequeue the oldest dog first', () => {
    const dog1 = new Dog('dog1');
    const dog2 = new Dog('dog2');

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    expect(shelter.dequeueDogs().getName()).toBe('dog1');
    expect(shelter.dequeueDogs().getName()).toBe('dog2');
  });

  it('should dequeue the oldest cat first', () => {
    const cat1 = new Dog('cat1');
    const cat2 = new Dog('cat2');

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dequeueDogs().getName()).toBe('cat1');
    expect(shelter.dequeueDogs().getName()).toBe('cat2');
  });

  it('should throw an error when dequeueing from an empty shelter', () => {
    expect(() => shelter.dequeueAny()).toThrow('No animals available');
  });

  it('should throw an error when dequeueing dogs from an empty shelter', () => {
    expect(() => shelter.dequeueDogs()).toThrow('No dogs available');
  });

  it('should throw an error when dequeueing cats from an empty shelter', () => {
    expect(() => shelter.dequeueCats()).toThrow('No cats available');
  });
});
