const path = require('path')
console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/test.txt', 'utf8')
console.log(first, second)

writeFileSync('./content/result-sync.txt', `here is the result:${first},${second}`,
  { flag: 'a' }
)
//async
const {readFile,writeFile} = require('fs')
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/test.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result
    writeFile('./content/result-sync.txt',`here is the result : ${first},${second}`,(err,result)=>{
      if(err){
        console.log(err)
        return
      }
      console.log(result)
    })
  })
  console.log(result)
})

