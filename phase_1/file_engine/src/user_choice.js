import readline from 'readline'
export default function UserChoice(){
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    return new Promise(resolve=>{
        rl.question('Enter choice: ',answer=>{
            rl.close()
            resolve(answer)
        })
    })


}
