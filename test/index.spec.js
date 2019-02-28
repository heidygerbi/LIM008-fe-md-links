let paths = require('path');
import {
    evaluatePath,
    transformToAbsPath,
    recognizeIfIsFile,
    getMDContent,
    convertMDToHtml,
    extractATagAttr,
    createArrLinkObj,
    validateExtMD
} from '../src/models/links.js';
import {
    extractHref,
    verifyLink,
    addVerification
} from '../src/models/validate.js';
import {calculateStats} from '../src/models/stats.js';
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
    it('debería retornar un objeto a base de un html', () => {
        expect(extractATagAttr('<a href="http://github.com">texto de ruta</a>', 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js')).toEqual({href: 'http://github.com/', text: 'texto de ruta', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'});
    });
});
describe('createArrLinkObj', () => {
    it('debería ser una función', () => {
        expect(typeof createArrLinkObj).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof createArrLinkObj({href:'link', text:'text', file:'path'})).toBe('object');
    });
    it('debería retornar un array con objetos', () => {
        expect(createArrLinkObj({href: 'http://github.com/', text: 'texto de ruta', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'})).toEqual([{href: 'http://github.com/', text: 'texto de ruta', file: 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/index.spec.js'}]);
    });
});
describe('extractHref', () => {
    it('debería ser una función', () => {
        expect(typeof extractHref).toBe('function');
    });
    it('debería retornar un array', () => {
        expect(typeof extractHref([{href: 'link', text: 'text', file: 'path'}])).toBe('object');
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
        expect(typeof calculateStats([{href: 'link', text: 'text', file: 'path'}])).toBe('object');
    });
});