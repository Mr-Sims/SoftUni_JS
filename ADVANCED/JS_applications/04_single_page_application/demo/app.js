import { sumNumbers as sum, numberProduct } from './module.js';

import { myArr, logArray} from './data.js'

import Person from './person.js'

console.log(sum(1, 3))

console.log(numberProduct(3, 3))

logArray()
myArr.push(2222)
logArray()

const pesho = new Person('Pesh', 30)


console.log(pesho);