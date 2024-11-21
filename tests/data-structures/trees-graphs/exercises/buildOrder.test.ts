import { buildOrder } from '../../../../data-structures/trees-graphs/exercises/buildOrder';

describe('buildOrder', () => {
  it('should return a valid build order for a simple dependecy graph', () => {
    const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
    const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
    const result = buildOrder(projects, dependencies);
    expect(result).toEqual(expect.arrayContaining(['f', 'e', 'a', 'b', 'd', 'c']));
  });

  it('should return an empty array for a dependency graph with a cycle', () => {
    const projects = ['a', 'b', 'c', 'd'];
    const dependencies = [['a', 'b'], ['b', 'c'], ['c', 'a']];
    const result = buildOrder(projects, dependencies);
    expect(result).toEqual([]);
  });

  it('should return a valid build order for projects with no dependencies', () => {
    const projects = ['a', 'b', 'c'];
    const dependencies: string[][] = [];
    const result = buildOrder(projects, dependencies);
    expect(result).toEqual(expect.arrayContaining(['a', 'b', 'c']));
  });

  it('should return an empty array for an empty list of projects and dependencies', () => {
    const projects: string[] = [];
    const dependencies: string[][] = [];
    const result = buildOrder(projects, dependencies);
    expect(result).toEqual([]);
  });
});
