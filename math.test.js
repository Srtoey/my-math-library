const math = require('./math')
const assert = require('assert')

console.log(math.sum(2, 2))

assert.strictEqual(math.sum(2, 2), 4, 'should sum two numbers')