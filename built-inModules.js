//os,path,fs,http
const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user)

//megthod returns the system uptime in sec
console.log(`the system uptime is ${os.uptime()} sec`)

const currentos = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}
console.log(currentos)
