import readline from 'readline'
export default function getUserChoice(){
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    return new Promise(resolve=>{
        rl.question('>',answer=>{
            rl.close()
            resolve(answer.split(',').map(x=>{return  x.trim()}))
        })
    })
}