import {
  extractHref,
  verifyLink,
  addVerification
} from '../src/models/validate.js';

describe('extractHref', () => {
  it('debería ser una función', () => {
    expect(typeof extractHref).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof extractHref([{ href: 'link', text: 'text', file: 'path' }])).toBe('object');
  });
});

describe('verifyLink', () => {
  it('debería ser una función', () => {
    expect(typeof verifyLink).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof verifyLink(['href1', 'href2', 'href3'])).toBe('object');
  });
});

describe('addVerification', () => {
  it('debería ser una función', () => {
    expect(typeof addVerification).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof addVerification(['href1', 'href2', 'href3'])).toBe('object');
  });
});