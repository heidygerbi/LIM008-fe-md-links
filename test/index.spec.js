import paths from 'path';
import {
  mdLinks,
  getArrObjLinks,
  getArrObjValidate,
  getObjStats
} from '../src/index.js';
const optionValidate = {
  validate: true,
  stats: false
};
const optionStats = {
  validate: false,
  stats: true
};
const optionValidateStats = {
  validate: true,
  stats: true
};
const inputPathAbs = paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md'));
const inputPathRelative = './test/testDir/a/a1/a1.md';
const inputPathAbsDir = paths.normalize(paths.join(__dirname, '/testDir/'));
const inputPathRelativeDir = './test/testDir/';
const arrOneObj = [{
  text: 'GitHub',
  href: 'http://github.com/',
  file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md'))
}];

const arrObj = [
  {
    text: 'GitHub',
    href: 'http://github.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md'))
  },
  {
    text: 'GitHub',
    href: 'http://github11.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a11/a11.md'))
  },
  {
    text: 'GitHub',
    href: 'http://github11.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/b/a11.md'))
  }
];
const output = [
  {
    text: 'GitHub',
    href: 'http://github.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md')),
    status: 200,
    value: 'OK'
  },
  {
    text: 'GitHub',
    href: 'http://github11.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a11/a11.md')),
    status: 404,
    value: 'Fail'
  },
  {
    text: 'GitHub',
    href: 'http://github11.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/b/a11.md')),
    status: 404,
    value: 'Fail'
  }
];
const outputStats = [
  arrObj,
  outputGetStats
];
const outputGetStats = {
  total: 3,
  unique: 2
};
const outputValidateStats = [
  output,
  outputGetValidateStats
];
const outputGetValidateStats = {
  total: 3,
  unique: 2,
  broken: 2
};

test('Debería retornar un array de objetos a partir de una ruta relativa de un archivo', (done) => {
  mdLinks(inputPathRelative).then((result) => {
    expect(result).toEqual(arrOneObj);
    done();
  });
});

test('Debería retornar un array de objetos a partir de una ruta absoluta de un archivo', (done) => {
  mdLinks(inputPathAbs).then((result) => {
    expect(result).toEqual(arrOneObj);
    done();
  });
});

test('Debería retornar un array de objetos a partir de una ruta relativa de un directorio', (done) => {
  mdLinks(inputPathRelativeDir).then((result) => {
    expect(result).toEqual(arrObj);
    done();
  });
});

test('Debería retornar un array de objetos a partir de una ruta absoluta de un archivo', (done) => {
  getArrObjLinks(inputPathAbs).then((result) => {
    expect(result).toEqual(arrOneObj);
    done();
  });
});

test('Debería retornar un array de objetos con validaciones a partir de una ruta  y opción validate = true', (done) => {
  mdLinks(inputPathAbsDir, optionValidate).then((result) => {
    expect(result).toEqual(output);
    done();
  });
});

test('Debería retornar un array[2] 1) array de objetos con validaciones y 2) objeto con estats', (done) => {
  mdLinks(inputPathAbsDir, optionValidateStats).then((result) => {
    expect(result).toEqual(outputValidateStats);
    done();
  });
});

test('Debería retornar un array[2] 1) array de objetos sin validaciones y 2) objeto con estats', (done) => {
  mdLinks(inputPathAbsDir, optionStats).then((result) => {
    expect(result).toEqual(outputStats);
    done();
  });
});

test('Debería retornar un array de objetos con dos propiedades adicionales por objeto: status y value', (done) => {
  getArrObjValidate(inputPathAbsDir)
    .then((res) => {
      expect(res).toEqual(output);
      done();
    });
});

test('Debería retornar un objetos con estadísticas: total y únicos (sin validate)', (done) => {
  getObjStats(inputPathAbsDir, optionStats)
    .then((res) => {
      expect(res).toEqual(outputGetStats);
      done();
    });
});

test('Debería retornar un objetos con estadísticas: total, únicos y rotos (con validate)', (done) => {
  getObjStats(inputPathAbsDir, optionValidateStats)
    .then((res) => {
      expect(res).toEqual(outputGetValidateStats);
      done();
    });
});