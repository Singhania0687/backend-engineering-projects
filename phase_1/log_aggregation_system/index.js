import process from 'process'
console.log=async(custom)=>{
  await process.send({type:'log',data:custom,timestamp:Date.now()})
}

console.log("Hey first logIn to console")