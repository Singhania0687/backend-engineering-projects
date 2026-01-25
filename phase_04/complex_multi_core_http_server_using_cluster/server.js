import http from 'http'
import process from 'process'
function heavyComputation(n) {
  if (n <= 1) return n;
  return heavyComputation(n - 1) + heavyComputation(n - 2);
}

export default function serverHandler(){
     const server = http.createServer((req, res) => {
  if (req.url === '/compute') {
    const result = heavyComputation(80); // VERY CPU intensive

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result} from PID ${process.pid}\n`);
  } else {
    res.writeHead(200);
    res.end(`Hello from PID ${process.pid}\n`);
  }
});
server.listen(3000,()=>{
    console.log(`Server listening on port 3000, PID: ${process.pid}`);
})

}
