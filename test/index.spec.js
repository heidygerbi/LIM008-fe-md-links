let paths = require('path');
import {
  mdLinks
} from '../src/index.js';
const inputPathAbs = paths.normalize(`${__dirname}/testDir/a/a1/a1.md`);
const inputPathRelative = './test/testDir/a/a1/a1.md';
describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('debería retornar un valor string', () => {
    expect(typeof mdLinks(inputPathRelative)).toBe('string');
  });
  // it('debería retornar uns ruta absoluta apartir de una ruta relativa', () => {
  //   expect(mdLinks(inputPathRelative)).toEqual(inputPathAbs);
  // });
  // it('debería retornar la misma ruta absoluta', () => {
  //   expect(mdLinks(inputPathAbs)).toEqual(inputPathAbs);
  // });
});