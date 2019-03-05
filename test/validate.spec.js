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
  it.only('debería retornar un array con todos los links encontrados en el array de objetos', () => {
    expect(extractHref(
      [{ 
        href: 'http://github.com/', 
        text: 'texto de ruta', 
        file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'
      }, 
      { 
        href: 'http://github1.com/', 
        text: 'texto de ruta 1', 
        file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'
      }, 
      { 
        href: 'http://github2.com/', 
        text: 'texto de ruta 2', 
        file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'
      }]).toBe(
        ['http://github.com/',
        'http://github1.com/',
        'http://github2.com/'] 
      ));
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