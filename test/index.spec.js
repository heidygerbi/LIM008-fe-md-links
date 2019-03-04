let paths = require('path');
import {
  mdLinks
} from '../src/index.js';
const inputPathAbs = paths.normalize(`${__dirname}/testDir/a/a1/a1.md`);
const inputPathRelative = './test/testDir/a/a1/a1.md';
const inputPathAbsDir = paths.normalize(`${__dirname}/testDir/`);
const inputPathRelativeDir = './test/testDir/';
describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('debería retornar un array de objetos', () => {
    expect(typeof mdLinks(inputPathRelative)).toBe('object');
  });
  // archivos
  it('debería retornar un array de objetos a partir de una ruta relativa de un archivo', () => {
    expect(mdLinks(inputPathRelative)).toEqual([{
      text: 'GitHub',
      href: 'http://github.com/',
      file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
    }]);
  });
  it('debería retornar un array de objetos a partir de una ruta absoluta de un archivo', () => {
    expect(mdLinks(inputPathAbs)).toEqual([{
      text: 'GitHub',
      href: 'http://github.com/',
      file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
    }]);
  });
  // directorios
  it('debería retornar un array de objetos a partir de una ruta relativa de un dir', () => {
    expect(mdLinks(inputPathRelativeDir)).toEqual([
      {
        text: 'GitHub',
        href: 'http://github.com/',
        file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
      },
      {
        text: 'GitHub',
        href: 'http://github11.com/',
        file: paths.normalize(`${__dirname}/testDir/a/a1/a11/a11.md`)
      },
      {
        text: 'GitHub',
        href: 'http://github11.com/',
        file: paths.normalize(`${__dirname}/testDir/b/a11.md`)
      }
    ]);
  });
//   it('debería retornar un array de objetos a partir de una ruta absoluta de un dir', () => {
//     expect(mdLinks(inputPathAbsDir)).toEqual([
//       {
//         text: 'GitHub',
//         href: 'http://github.com/',
//         file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
//       },
//       {
//         text: 'GitHub',
//         href: 'http://github11.com/',
//         file: paths.normalize(`${__dirname}/testDir/a/a1/a11/a11.md`)
//       }
//     ]);
//   });
});