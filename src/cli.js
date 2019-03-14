#!/usr/bin/env node
import { calculateStats } from './models/stats.js';
import { mdLinks } from './index.js';
import isValid from 'is-valid-path';
const [, , ...args] = process.argv;
const args2 = process.argv[2];
const args3 = process.argv[3];
const args4 = process.argv[4];

export const cli = (args2, args3, args4) => new Promise((resolve) => {
  if (args2 && isValid(args2) && !args3) {
    const resp = mdLinks(args2, { validate: false, stats: false })
      .then(response => resolve(response));
  } else if (isValid(args2) && args3 === '--validate' && !args4) {
    console.log('entra aqui');
    const resp = (mdLinks(args2, { validate: true, stats: false })
      .then(response => resolve(response)));
  } else if (isValid(args2) && args3 === '--stats' && !args4) {
    const resp = (mdLinks(args2, { validate: false, stats: true })
      .then(response => resolve(calculateStats(response)))
      .then(response => resolve(response)));
  } else if ((isValid(args2) && args3 === '--validate' && args4 === '--stats') || (isValid(args2) && args3 === '--stats' && args4 === '--validate')) {
    const resp = (mdLinks(process.argv[2], { validate: true, stats: true })
      .then(response => resolve(calculateStats(response)))
      .then(response => resolve(response)));
  } else console.log('Path u opciones no son validos, por favor revise la documentación');
});

cli(args2, args3, args4).then(response => console.log(response));