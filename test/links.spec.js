let paths = require('path');
import {
  extractATagAttr,
  getFile
} from '../src/models/links.js';

const inputTagA = '<a href="http://github.com">texto de ruta</a>';
const inputTagA1 = '<a href="http://github1.com">texto de ruta 1</a>';
const inputTagA2 = '<a href="http://github2.com">texto de ruta 2</a>';
const inputTagsA = inputTagA + ',' + inputTagA1 + ',' + inputTagA2;
const inputPath = paths.join(__dirname, '/test/index.spec.js');
const inputPathDir = paths.join(__dirname, '/testDir');
const inputTagALarge = '<a href="http://github.com">texto de ruta texto de ruta texto de ruta texto de ruta texto de ruta texto de ruta texto de ruta</a>';
const arrObj = [
  { 
    href: 'http://github.com/', 
    text: 'texto de ruta', 
    file: inputPath
  }, 
  { 
    href: 'http://github1.com/', 
    text: 'texto de ruta 1', 
    file: inputPath
  }, 
  { 
    href: 'http://github2.com/', 
    text: 'texto de ruta 2', 
    file: inputPath
  }
];
const arrObjLarge = [
  { 
    href: 'http://github.com/', 
    text: 'texto de ruta texto de ruta texto de ruta texto de', 
    file: inputPath
  }
];
const arrPathFile = [
  paths.normalize(paths.join(__dirname, '/testDir/a/a1/a1.md')), 
  paths.normalize(paths.join(__dirname, '/testDir/a/a1/a11/a11.md')),
  paths.normalize(paths.join(__dirname, '/testDir/b/a11.md'))
];

describe('extractATagAttr', () => {
  it('debería ser una función', () => {
    expect(typeof extractATagAttr).toBe('function');
  });
  it('debería retornar un objeto', () => {
    expect(typeof extractATagAttr(inputTagA)).toBe('object');
  });
  it('debería retornar un array de objeto a base de un archivo html (3 objetos)', () => {
    expect(extractATagAttr(inputTagsA, inputPath)).toEqual(arrObj);
  });
  it('debería recortar el text a 50 caracteres', () => {
    expect(extractATagAttr(inputTagALarge, inputPath)).toEqual(arrObjLarge);
  });
});

describe('getFile', () => {
  it('debería ser una función', () => {
    expect(typeof getFile).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof getFile(inputPathDir)).toBe('object');
  });
  it('debería imprimir todos los archivos encontrados de la ruta dada', () => {
    expect(getFile(inputPathDir))
      .toEqual(arrPathFile);
  });
});