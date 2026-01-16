import readline from 'readline'
function monitorChoice(){
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    return new Promise(resolve=>{
        rl.question('Enter the interval in miliseconds and duration in sec',(answer)=>{
            rl.close();
            const [interval, duration] = answer
                    .split(' ')
                    .map(Number);
                resolve({ interval, duration });
        //    resolve(answer.split(' ').map(x=>x.trim()))
        })
    })

}
function allocateChoice(){
     const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    return new Promise(resolve=>{
        rl.question('Enter the size of buffer in MB ',(answer)=>{
            rl.close();
             resolve(Number(answer.trim()));
        //    resolve(answer.split(' ').map(x=>x.trim()))
        })
    })

}

export default {monitorChoice,allocateChoice}