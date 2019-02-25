let paths = require('path');
import {
    evaluatePath,
    transformToAbsPath,
    recognizeIfIsFile,
    getFiles,
    getMDContent,
    convertMDToHtml,
    extractATagAttr,
    createArrLinkObj
} from '../src/models/links.js';
import {
    extractHref,
    verifyLink,
    addVerification
} from '../src/models/validate.js';
import {calculateStats} from '../src/models/stats.js';
const inputPathAbs = 'C:/Users/Usuario/Desktop/src/models/stats.js';
const inputPathAbsWin = paths.normalize(inputPathAbs);
const inputPathAbsDir = 'C:/Users/Usuario/Desktop/src/models'; 
const inputPathRelative = '../src/models/stats.js';
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
        expect(transformToAbsPath(inputPathRelative)).toEqual(inputPathAbsWin);
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
 describe('getFiles', () => {
    it('debería ser una función', () => {
        expect(typeof getFiles).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof getFiles(inputPathAbs)).toBe('object');
    });
 });
 
 describe('getMDContent', () => {
    it('debería ser una función', () => {
        expect(typeof getMDContent).toBe('function');
    });
    it('debería retornar un valor string', () => {
        expect(typeof getMDContent(inputPathAbs)).toBe('string');
    });
});
describe('convertMDToHtml', () => {
    it('debería ser una función', () => {
        expect(typeof convertMDToHtml).toBe('function');
    });
    it('debería retornar un valor string', () => {
        expect(typeof convertMDToHtml('contenido MD')).toBe('string');
    });
});
describe('extractATagAttr', () => {
    it('debería ser una función', () => {
        expect(typeof extractATagAttr).toBe('function');
    });
    it('debería retornar un objeto', () => {
        expect(typeof extractATagAttr('contenido HTML')).toBe('object');
    });
});
describe('createArrLinkObj', () => {
    it('debería ser una función', () => {
        expect(typeof createArrLinkObj).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof createArrLinkObj({href:'link', text:'text', file:'path'})).toBe('object');
    });
});
describe('extractHref', () => {
    it('debería ser una función', () => {
        expect(typeof extractHref).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof extractHref([{href:'link', text:'text', file:'path'}])).toBe('object');
    });
});
describe('verifyLink', () => {
    it('debería ser una función', () => {
        expect(typeof verifyLink).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof verifyLink(['href1','href2','href3'])).toBe('object');
    });
});
describe('addVerification', () => {
    it('debería ser una función', () => {
        expect(typeof addVerification).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof addVerification(['href1','href2','href3'])).toBe('object');
    });
});
describe('calculateStats', () => {
    it('debería ser una función', () => {
        expect(typeof calculateStats).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof calculateStats(
            [{href:'link', text:'text', file:'path'}]
        )).toBe('object');
    });
});
