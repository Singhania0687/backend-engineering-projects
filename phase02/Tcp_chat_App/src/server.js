import net from 'net'
const PORT=3500
const server=net.createServer((socket)=>{
    console.log("New client is connected")

    socket.on('data',(chunk)=>{
        console.log("Data is received via the client in the buffer format :",chunk," \n having size ",chunk.length," actual data ",chunk.toString())
         socket.write("Hey you have sent this file aren't you ")
    })
    // socket.on('end',()=>{
    //     console.log(`Client disconnected ,Visting again`)
    // })
    socket.on('error',err=>{
        console.log("Error occured ",err)
    })   
})

server.listen(PORT,()=>{
    console.log("Server is listening on Port ",PORT)
})