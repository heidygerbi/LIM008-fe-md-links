#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _stats = require("./models/stats.js");

var _index = require("./index.js");

var _isValidPath = _interopRequireDefault(require("is-valid-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv;
const args2 = process.argv[2];
const args3 = process.argv[3];
const args4 = process.argv[4];

const cli = (args2, args3, args4) => new Promise(resolve => {
  if (args2 && (0, _isValidPath.default)(args2) && !args3) {
    const resp = (0, _index.mdLinks)(args2, {
      validate: false,
      stats: false
    }).then(response => resolve(response));
  } else if ((0, _isValidPath.default)(args2) && args3 === '--validate' && !args4) {
    console.log('entra aqui');
    const resp = (0, _index.mdLinks)(args2, {
      validate: true,
      stats: false
    }).then(response => resolve(response));
  } else if ((0, _isValidPath.default)(args2) && args3 === '--stats' && !args4) {
    const resp = (0, _index.mdLinks)(args2, {
      validate: false,
      stats: true
    }).then(response => resolve((0, _stats.calculateStats)(response))).then(response => resolve(response));
  } else if ((0, _isValidPath.default)(args2) && args3 === '--validate' && args4 === '--stats' || (0, _isValidPath.default)(args2) && args3 === '--stats' && args4 === '--validate') {
    const resp = (0, _index.mdLinks)(process.argv[2], {
      validate: true,
      stats: true
    }).then(response => resolve((0, _stats.calculateStats)(response))).then(response => resolve(response));
  } else console.log('Path u opciones no son validos, por favor revise la documentación');
});

exports.cli = cli;
cli(args2, args3, args4).then(response => console.log(response));