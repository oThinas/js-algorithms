class Queue<T> {
  elements = new Map<number, T>();
  head = 0;
  tail = 0;

  enqueue(value: T) {
    this.elements.set(this.tail++, value);
  }

  dequeue(): T | undefined {
    if (this.head === this.tail) {
      return undefined;
    }

    return this.elements.get(this.head++);
  }

  private get size() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.size === 0;
  }
}

export function buildOrder(projects: string[], dependencies: string[][]): string[] {
  const graph = new Map<string, string[]>();
  const inDegree = new Map<string, number>();
  for (const [project, dependency] of dependencies) {
    if (!graph.has(project)) {
      graph.set(project, []);
    }

    graph.get(project)!.push(dependency);
    inDegree.set(dependency, (inDegree.get(dependency) || 0) + 1);
  }

  const queue = new Queue<string>();
  const result: string[] = [];
  for (const project of projects) {
    if (!inDegree.has(project)) {
      queue.enqueue(project);
    }
  }

  while (!queue.isEmpty) {
    const current = queue.dequeue()!;
    result.push(current);

    for (const child of graph.get(current) || []) {
      inDegree.set(child, inDegree.get(child)! - 1);
      if (!inDegree.get(child)) {
        queue.enqueue(child);
      }
    }
  }

  return result.length === projects.length ? result : [];
}
