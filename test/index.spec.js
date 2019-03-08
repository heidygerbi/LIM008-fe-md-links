let paths = require('path');
import {
  mdLinks,
  getArrObjLinks
} from '../src/index.js';
const inputPathAbs = paths.normalize(paths.join(__dirname,'/testDir/a/a1/a1.md'));
const inputPathRelative = './test/testDir/a/a1/a1.md';
const inputPathAbsDir = paths.normalize(paths.join(__dirname,'/testDir/'));
const inputPathRelativeDir = './test/testDir/';

test('debería retornar un array de objetos a partir de una ruta relativa de un archivo', (done) => {
  mdLinks(inputPathRelative).then((result) => {
    expect(result).toEqual([{
      text: 'GitHub',
      href: paths.normalize('http://github.com/'),
      file: paths.normalize(paths.join(__dirname,'/testDir/a/a1/a1.md'))
    }]);
    done();
  });
});
test('debería retornar un array de objetos a partir de una ruta absoluta de un archivo', (done) => {
  mdLinks(inputPathAbs).then((result) => {
    expect(result).toEqual([{
      text: 'GitHub',
      href: paths.normalize('http://github.com/'),
      file: paths.normalize(paths.join(__dirname,'/testDir/a/a1/a1.md'))
    }]);
    done();
  });
});
test('debería retornar un array de objetos a partir de una ruta relativa de un directorio', (done) => {
  mdLinks(inputPathRelativeDir).then((result) => {
    expect(result).toEqual([
      {
        text: 'GitHub',
        href: paths.normalize('http://github.com/'),
        file: paths.normalize(paths.join(__dirname,'/testDir/a/a1/a1.md'))
      },
      {
        text: 'GitHub',
        href: paths.normalize('http://github11.com/'),
        file: paths.normalize(paths.join(__dirname,'/testDir/a/a1/a11/a11.md'))
      },
      {
        text: 'GitHub',
        href: paths.normalize('http://github11.com/'),
        file: paths.normalize(paths.join(__dirname,'/testDir/b/a11.md'))
      }
    ]);
    done();
  });
});
test('debería retornar un array de objetos a partir de una ruta absoluta de un archivo', (done) => {
  getArrObjLinks(inputPathAbs).then((result) => {
    expect(result).toEqual([{
      text: 'GitHub',
      href: paths.normalize('http://github.com/'),
      file: paths.normalize(paths.join(__dirname,'/testDir/a/a1/a1.md'))
    }]);
    done();
  });
});