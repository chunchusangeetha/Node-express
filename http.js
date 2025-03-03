const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("welcome to our home page")
    return;
  }
  if (req.url === '/about') {
    res.end('here is our short hisyory')
    return;
  }
  res.end(`
    <h1>Ooops!</h1>
    <p>we can't find the page </p>
    <a href='/'>back to home</a>
  `)
})

server.listen(5000, ()=>{
  console.log("server is running on port 5000")
})