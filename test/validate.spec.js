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
  it('debería retornar un array con todos los links encontrados en el array de objetos', () => {
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
      }])).toEqual(
      [
        'http://github.com/',
        'http://github1.com/',
        'http://github2.com/'
      ] 
    );
  });
});

describe('verifyLink', () => {
  it('debería ser una función', () => {
    expect(typeof verifyLink).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof verifyLink(['href1', 'href2', 'href3'])).toBe('object');
  });
  it('debería retornar un array con dos atributos mas a partir de', () => {
    expect(verifyLink(['href1', 'href2', 'href3'])).toBe('object');
  });
});

test('debería retornar un array de objetos anexando status y value', (done) => {
  addVerification([{
    text: 'GitHub',
    href: 'http://github.com/',
    file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
  }]).then((result) => {
    expect(result).toEqual([{
      text: 'GitHub',
      href: 'http://github.com/',
      file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`),
      status: 300,
      value: OK
    }]);
    done();
  });
});
// describe('addVerification', () => {
//   it('debería ser una función', () => {
//     expect(typeof addVerification).toBe('function');
//   });
//   it('debería retornar un array', () => {
//     expect(typeof addVerification(['href1', 'href2', 'href3'])).toBe('object');
//   });
// });