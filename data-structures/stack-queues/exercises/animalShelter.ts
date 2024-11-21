import { Queue } from '../queue';

abstract class Animal {
  private order: number;
  protected name: string;

  constructor(name: string) {
    this.order = 0;
    this.name = name;
  }

  setOrder(order: number): void {
    this.order = order;
  }

  getOrder(): number {
    return this.order;
  }

  getName(): string {
    return this.name;
  }

  isOlderThan(animal: Animal): boolean {
    return this.order < animal.getOrder();
  }
}

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

export class AnimalShelter {
  private dogs: Queue<Dog>;
  private cats: Queue<Cat>;
  private order: number;

  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.order = 0;
  }

  enqueue(animal: Animal): void {
    animal.setOrder(this.order);
    this.order++;

    if (animal instanceof Dog) {
      this.dogs.add(animal);
    } else if (animal instanceof Cat) {
      this.cats.add(animal);
    }
  }

  dequeueAny(): Animal {
    const isDogAvailable = !this.dogs.isEmpty();
    const isCatAvailable = !this.cats.isEmpty();

    if (!isDogAvailable && !isCatAvailable) {
      throw new Error('No animals available');
    }

    if (!isDogAvailable) {
      return this.dequeueCats();
    }

    if (!isCatAvailable) {
      return this.dequeueDogs();
    }

    const dogToAdopt = this.dogs.peek()!;
    const catToAdopt = this.cats.peek()!;

    if (dogToAdopt.isOlderThan(catToAdopt)) {
      return this.dequeueDogs();
    }

    return this.dequeueCats();
  }

  dequeueDogs(): Dog {
    if (this.dogs.isEmpty()) {
      throw new Error('No dogs available');
    }

    return this.dogs.remove()!;
  }

  dequeueCats(): Cat {
    if (this.cats.isEmpty()) {
      throw new Error('No cats available');
    }

    return this.cats.remove()!;
  }
}
