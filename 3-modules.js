// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

// require's param: where the module is located
// start with ./ for your module; if the module is two levels up, then ../
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mine-granade')

// console.log(names)
// console.log(data);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
