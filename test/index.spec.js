let paths = require('path');
import {
  mdLinks,
  getArrObjLinks
} from '../src/index.js';
const inputPathAbs = paths.normalize(`${__dirname}/testDir/a/a1/a1.md`);
const inputPathRelative = './test/testDir/a/a1/a1.md';
const inputPathAbsDir = paths.normalize(`${__dirname}/testDir/`);
const inputPathRelativeDir = './test/testDir/';

test('debería retornar un array de objetos a partir de una ruta relativa de un archivo', (done) => {
  mdLinks(inputPathRelative).then((result) => {
    expect(result).toEqual([{
      text: 'GitHub',
      href: 'http://github.com/',
      file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
    }]);
    done();
  });
});

test.only('debería retornar un array de objetos a partir de una ruta absoluta de un archivo', (done) => {
  getArrObjLinks(inputPathAbs).then((result) => {
    expect(result).toBe([{
      text: 'GitHub',
      href: 'http://github.com/',
      file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
    }]);
    done();
  });
});

//   it('debería retornar un array de objetos a partir de una ruta absoluta de un archivo', () => {
//     expect(mdLinks(inputPathAbs)).toEqual([{
//       text: 'GitHub',
//       href: 'http://github.com/',
//       file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
//     }]);
//   });
//   // directorios
//   it('debería retornar un array de objetos a partir de una ruta relativa de un dir', () => {
//     expect(mdLinks(inputPathRelativeDir)).toEqual([
//       {
//         text: 'GitHub',
//         href: 'http://github.com/',
//         file: paths.normalize(`${__dirname}/testDir/a/a1/a1.md`)
//       },
//       {
//         text: 'GitHub',
//         href: 'http://github11.com/',
//         file: paths.normalize(`${__dirname}/testDir/a/a1/a11/a11.md`)
//       },
//       {
//         text: 'GitHub',
//         href: 'http://github11.com/',
//         file: paths.normalize(`${__dirname}/testDir/b/a11.md`)
//       }
//     ]);
//   });
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
// });