let paths = require('path');
import { 
  calculateStats,
  getArrLinksUnique,
  getArrLinksBroken
} from '../src/models/stats.js';

const inputVal = [
  {
    text: 'GitHub',
    href: 'https://github.com/',
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
const outputVal = {
  total: 4,
  unique: 2,
  broken: 3
};
const inputNotVal = [
  {
    text: 'GitHub',
    href: 'https://github.com/',
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
    file: paths.normalize(paths.join(__dirname, '/testDir/a/a1/a11/a11.md'))
  },
  {
    text: 'GitHub',
    href: 'http://github11.com/',
    file: paths.normalize(paths.join(__dirname, '/testDir/b/a11.md'))
  }
];
const outputNotVal = {
  total: 4,
  unique: 2
};
const outputUnique = ['https://github.com/', 'http://github11.com/'];
const outputBroken = [404, 404, 404];

describe('calculateStats', () => {
  it('Debería ser una función', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('Debería retornar un objeto', () => {
    expect(typeof calculateStats(inputVal)).toBe('object');
  });
  it('Debería retornar un objeto con: total, únicos y rotos', () => {
    expect(calculateStats(inputVal)).toEqual(outputVal);
  });
  it('Debería retornar un objeto con: total y únicos', () => {
    expect(calculateStats(inputNotVal)).toEqual(outputNotVal);
  });
});

describe('getArrLinksUnique', () => {
  it('Debería ser una función', () => {
    expect(typeof getArrLinksUnique).toBe('function');
  });
  it('Debería retornar un array', () => {
    expect(typeof getArrLinksUnique(inputVal)).toBe('object');
  });
  it('Debería retornar un array con todos los links únicos', () => {
    expect(getArrLinksUnique(inputNotVal)).toEqual(outputUnique);
  });
});
describe('getArrLinksBroken', () => {
  it('Debería ser una función', () => {
    expect(typeof getArrLinksBroken).toBe('function');
  });
  it('Debería retornar un array', () => {
    expect(typeof getArrLinksBroken(inputVal)).toBe('object');
  });
  it('Debería retornar un array con todos los estatus Fail (menores a 200 o mayores igual a 400)', () => {
    expect(getArrLinksBroken(inputVal)).toEqual(outputBroken);
  });
});