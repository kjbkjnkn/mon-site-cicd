const assert = require('assert');
const { saluer } = require('./script.js');

assert.strictEqual(saluer('Léa'), 'Bonjour Léa !');

console.log('Tous les tests sont passés !');
