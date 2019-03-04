let paths = require('path');
import {
  evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getMDContent,
  convertMDToHtml,
  extractATagAttr,
  validateExtMD,
  getFile
} from '../src/models/links.js';

const inputPathAbs = paths.normalize(`${__dirname}/testDir/a/a1/a1.md`);
const inputPathAbsDir = `${__dirname}/testDir/a/a1/`;
const inputPathRelative = './test/testDir/a/a1/a1.md';
describe('evaluatePath', () => {
  it('debería ser una función', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('debería retornar un valor booleano', () => {
    expect(evaluatePath(inputPathAbs)).browser;
  });
  it('debería retornar true con inputPathAbs', () => {
    expect(evaluatePath(inputPathAbs)).toEqual(true);
  });
  it('debería retornar false con inputPathRelative', () => {
    expect(evaluatePath(inputPathRelative)).toEqual(false);
  });
});
describe('transformToAbsPath', () => {
  it('debería ser una función', () => {
    expect(typeof transformToAbsPath).toBe('function');
  });
  it('debería retornar un valor string', () => {
    expect(typeof transformToAbsPath(inputPathRelative)).toBe('string');
  });
  it('debería retornar  ruta absoluta a partir de ruta relativa', () => {
    expect(transformToAbsPath(inputPathRelative)).toBe(inputPathAbs);
  });
});
describe('recognizeIfIsFile', () => {
  it('debería ser una función', () => {
    expect(typeof recognizeIfIsFile).toBe('function');
  });
  it('debería retornar un valor booleano', () => {
    expect(recognizeIfIsFile(inputPathAbs)).browser;
  });
  it('debería retornar true con inputPathAbs', () => {
    expect(recognizeIfIsFile(inputPathAbs)).toEqual(true);
  });
  it('debería retornar false con inputPathAbsDir', () => {
    expect(recognizeIfIsFile(inputPathAbsDir)).toEqual(false);
  });
});
describe('validateExtMD', () => {
  it('debería ser una función', () => {
    expect(typeof validateExtMD).toBe('function');
  });
  it('debería retornar un string', () => {
    expect(typeof validateExtMD(inputPathAbs)).toBe('string');
  });
  it('debería retornar .md', () => {
    expect(validateExtMD(inputPathAbs)).toBe('.md');
  });
});

describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  it('debería retornar un valor string', () => {
    expect(typeof getMDContent(inputPathAbs)).toBe('string');
  });
  it('debería retornar el contenido de archivo .md', () => {
    expect(getMDContent(inputPathAbs)).toBe('[GitHub](http://github.com)');
  });
});

describe('convertMDToHtml', () => {
  it('debería ser una función', () => {
    expect(typeof convertMDToHtml).toBe('function');
  });
  it('debería retornar un valor string', () => {
    expect(typeof convertMDToHtml('contenido MD')).toBe('string');
  });
  it('debería retornar un html a base de un md', () => {
    expect(convertMDToHtml('[GitHub](http://github.com)')).toBe('<p><a href="http://github.com">GitHub</a></p>' + '\n');
  });
});

describe('extractATagAttr', () => {
  it('debería ser una función', () => {
    expect(typeof extractATagAttr).toBe('function');
  });
  it('debería retornar un objeto', () => {
    expect(typeof extractATagAttr('<a href="http://github.com">texto de ruta</a>')).toBe('object');
  });
  it('debería retornar un array de objeto a base de un archivo html (3 objetos)', () => {
    expect(extractATagAttr('<a href="http://github.com">texto de ruta</a><a href="http://github1.com">texto de ruta 1</a><a href="http://github2.com">texto de ruta 2</a>', 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js')).toEqual([{ href: 'http://github.com/', text: 'texto de ruta', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}, { href: 'http://github1.com/', text: 'texto de ruta 1', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}, { href: 'http://github2.com/', text: 'texto de ruta 2', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}]);
  });
  it('debería retornar un array de objeto a base de un archivo html (2 objetos)', () => {
    expect(extractATagAttr('<a href="http://github.com">texto de ruta</a><a href="http://github1.com">texto de ruta 1</a>', 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js')).toEqual([{ href: 'http://github.com/', text: 'texto de ruta', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}, { href: 'http://github1.com/', text: 'texto de ruta 1', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}]);
  });
  it('debería retornar un array de objeto a base de un archivo html (1 objeto)', () => {
    expect(extractATagAttr('<a href="http://github1.com">texto de ruta 1</a>', 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js')).toEqual([ { href: 'http://github1.com/', text: 'texto de ruta 1', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}]);
  });
});

describe('getFile', () => {
  it('debería ser una función', () => {
    expect(typeof getFile).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof getFile(
      `${__dirname}/testDir`))
      .toBe('object');
  });
  it('debería imprimir contenido de la ruta dada', () => {
    expect(getFile(
      `${__dirname}/testDir`))
      .toEqual([paths.normalize(`${__dirname}/testDir/a/a1/a1.md`), 
        paths.normalize(`${__dirname}/testDir/a/a1/a11/a11.md`),
        paths.normalize(`${__dirname}/testDir/b/a11.md`)]);
  });
});