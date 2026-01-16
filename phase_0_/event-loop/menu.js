export default function menu(){
console.log(`Select tasks to add to the event loop:
1. setTimeout 0ms
2. setImmediate
3. process.nextTick
4. Promise.then
5. I/O callback (fs.readFile)
Enter choices separated by comma:
`);
}
