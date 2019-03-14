import paths from 'path';
import { verifyLink, updateArrObjLinks } from '../src/models/validate.js';
const inputArrObj = [
  {
    text: 'GitHub',
    href: 'https://github.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md'))
  },
  {
    text: 'GitHub',
    href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a11/a11.md'))
  },
  {
    text: 'GitHub',
    href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src',
    file: paths.normalize(paths.join(__dirname, '/testDir/b/a11.md'))
  }
];
const outputArrObj = [
  {
    text: 'GitHub',
    href: 'https://github.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md')),
    status: 200,
    value: 'OK'
  },
  {
    text: 'GitHub',
    href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a11/a11.md')),
    status: 404,
    value: 'Fail'
  },
  {
    text: 'GitHub',
    href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src',
    file: paths.normalize(paths.join(__dirname, '/testDir/b/a11.md')),
    status: 404,
    value: 'Fail'
  }
];
test('Debería retornar un objeto con 2 propiedades extras', (done) => {
  verifyLink({ text: 'GitHub', href: 'http://github.com/', file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md')) })
    .then((result) => {
      expect(result).toEqual({ text: 'GitHub', href: 'http://github.com/', file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md')), status: 200, value: 'OK'});
      done();
    });
});
test('Debería retornar un array de objetos con dos propiedades adicionales por objeto: status y value', (done) => {
  updateArrObjLinks(inputArrObj)
    .then((result) => {
      expect(result).toEqual(outputArrObj);
      done();
    });
});