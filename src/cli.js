#!/usr/bin/env node
import { calculateStats } from './models/stats.js';
import { mdLinks } from './index.js';
import isValid from 'is-valid-path';
const args2 = process.argv[2];
const args3 = process.argv[3];
const args4 = process.argv[4];

export const cli = (args2, args3, args4) => new Promise((resolve) => {
  let valValidate = false;
  let valStats = false;
  if (args3 === '--validate' || args4 === '--validate') valValidate = true;
  if (args3 === '--stats' || args4 === '--stats') valStats = true;
  if ((args2 && isValid(args2) && !args3) || (isValid(args2) && args3 === '--validate' && !args4)) {
    mdLinks(args2, { validate: valValidate, stats: valStats })
      .then(response => resolve(response));
  } else if ((isValid(args2) && args3 === '--stats' && !args4) || ((isValid(args2) && args3 === '--validate' && args4 === '--stats') || (isValid(args2) && args3 === '--stats' && args4 === '--validate'))) {
    mdLinks(args2, { validate: valValidate, stats: valStats })
      .then(response => resolve(calculateStats(response, valValidate)))
      .then(response => resolve(response));
  } else console.log('Path u opciones no son validos, por favor revise la documentación');
});

cli(args2, args3, args4).then(response => console.log(response));