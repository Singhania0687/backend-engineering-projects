import http from "http"
import url from 'url'
const routes={
  GET:{
    '/users':(req,res)=>{
      res.writeHead(200,{"Content-Type":"application/json"})
      res.end(JSON.stringify([{id:1,name:"John"},{id:2,name:"Jane"}]))
    },
    '/':(req,res)=>{
      res.writeHead(200,{"Content-Type":"text/plain"})
      res.end('home')
    }
  },
  POST:{
    '/':(req,res)=>{
      res.writeHead(200,{"Content-Type":"text/plain"})
      res.end('home') 
    },
    '/user':(req,res)=>{
      res.writeHead(200,{"Content-Type":"text/plain"})
      res.end('user registered successfully') 
    }
  }
}

const server = http.createServer((req, res) => {
  const parsedURL=url.parse(req.url)
   const pathname=parsedURL.pathname
const methodroutes = routes[req.method]

if (methodroutes) {
  const pathval = methodroutes[pathname]
  if (pathval) {
    return pathval(req, res)
  }
}

res.writeHead(404, { "Content-Type": "text/plain" })
res.end("Route not found")


 
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
