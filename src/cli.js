#!/usr/bin/env node
import { calculateStats } from './models/stats.js';
import { mdLinks } from './index.js';
console.log(process.argv);
// const [, , ...args] = process.argv;
// prompt(process.argv);
// new Promise((resolve) => {
//   if (process.argv[2]) {
//     return mdLinks(process.argv[2], { validate: false, stats: false })
//       .then(response => resolve(response));
//   } if (process.argv[2] && process.argv[3] === '--validate') {
//     return mdLinks(process.argv[2], { validate: true, stats: false })
//       .then(response => resolve(response));
//   } else if (process.argv[2] && process.argv[3] === '--stats') {
//     return mdLinks(process.argv[2], { validate: false, stats: true })
//       .then(response => resolve(response));
//   } else if ((process.argv[2] && process.argv[2] === '--validate' && process.argv[3] === '--stats') || (process.argv[2] && process.argv[2] === '--validate' && process.argv[3] === '--stats')) {
//     return mdLinks(process.argv[2], { validate: true, stats: true })
//       .then(response => resolve(calculateStats(response)))
//         .then(response => resolve(response));
//   }
// });