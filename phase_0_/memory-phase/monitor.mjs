import process from 'process'
import drawBar from './visualizer.js'
export default function monitor(values){
    const {interval,duration}=values

    if (!interval || interval < 10) {
    console.log("Invalid interval, defaulting to 1000ms");
    interval = 1000;
}
 if (!duration || duration <= 0) {
    console.log("Invalid duration, defaulting to 10s");
    duration = 10;
  }


   let timer=0;
    const times=setInterval(()=>{
        timer+=interval/1000;
        const memory=process.memoryUsage()
        const heapused=mb(memory.heapUsed)

     console.log(`Time elpased : ${timer.toFixed(1)} sec | RSS: ${mb(memory.rss)}MB | Heap Used :${heapused}MB`)
     drawBar(heapused);

        if(timer>=duration)
            clearInterval(times)
    },interval)

}

function mb(bytes)
{
    return Math.round( bytes/1024/1024);
}