const amount = 15

if(amount<10){
  console.log("small number");
}else{
  console.log("large nmber")
}
console.log("first node js")
console.log(__dirname)
// setInterval(()=>{
//   console.log("hello world")
// },1000)

//commonjs,every file is module(by default)
//Modules - Encapsulated code(only share min)
const _ = require('loadsh')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log("loadsh",newItems)

const names = require('./names')
const sayHi = require('./utils')
const names2 = require('./names2')
require('./numbers')
console.log(names)
console.log(names2)
sayHi(names.nam)
sayHi(names.name)
sayHi("chiranjeevi")
sayHi("sangeetha chunchu")
sayHi(names2.items)
sayHi(names2.singleperson.name)
console.log("app.js end")