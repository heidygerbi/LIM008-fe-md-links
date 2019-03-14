import paths from 'path';
import { cli } from '../src/cli.js';
const inputPathAbsDir = paths.normalize(paths.join(__dirname, '/testDir/'));
const arrObj = [
  {
    text: 'GitHub',
    href: 'http://github.com/',
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
const arrObjVal = [
  {
    text: 'GitHub',
    href: 'http://github.com/',
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
const objStats = {
  total: 3,
  unique: 2
};
const objStatsVal = {
  total: 3,
  unique: 2,
  broken: 2
};

test('Debería retornar un array de objetos cuando tiene solo ruta', (done) => {
  cli(inputPathAbsDir).then((result) => {
    expect(result).toEqual(arrObj);
    done();
  });
});

test('Debería retornar un objeto cuando tiene ruta y -- stats', (done) => {
  cli(inputPathAbsDir, '--stats').then((result) => {
    expect(result).toEqual(objStats);
    done();
  });
});

// test('Debería retornar un array de objetos cuando tiene ruta y -- validate', (done) => {
//   cli(inputPathAbsDir, '--validate').then((result) => {
//     expect(result).toEqual(arrObjVal);
//     done();
//   });
// });

// test('Debería retornar un objeto cuando tiene ruta, --validate y -- stats', (done) => {
//   cli(inputPathValStats).then((result) => {
//     expect(result).toEqual(objStatsVal);
//     done();
//   });
// });

// test('Debería retornar un objeto cuando tiene ruta, --stats y -- validate', (done) => {
//   cli(inputPathAbsDir, '--stats', '--validate').then((result) => {
//     expect(result).toEqual(objStatsVal);
//     done();
//   });
// });

