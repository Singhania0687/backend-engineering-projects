import cluster from 'cluster'
import os from 'os'
import process from 'process'
import serverHandler from './server.js';


if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;

  console.log(`Master PID: ${process.pid}`);
  console.log(`Forking ${cpuCount} workers...\n`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
    //    when process get killed
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Worker process id: ${worker.process.pid} killed, CODE :${code} ,signal passed ${signal}`)
        console.log("starting new worker on it's behalf")
        cluster.fork();
    })
} else {
 console.log(`Worker started. PID: ${process.pid}`);
  serverHandler()

}