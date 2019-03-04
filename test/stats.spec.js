import { calculateStats } from '../src/models/stats.js';

describe('calculateStats', () => {
  it('debería ser una función', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof calculateStats([{ href: 'link', text: 'text', file: 'path' }])).toBe('object');
  });
});