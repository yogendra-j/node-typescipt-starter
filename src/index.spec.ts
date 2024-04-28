import { sum } from './index';

describe('index', () => {
  it('should return zero', () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });

  it('should return 1', () => {
    const result = sum(1, 0);
    expect(result).toBe(1);
  });

  it('should return 2', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
