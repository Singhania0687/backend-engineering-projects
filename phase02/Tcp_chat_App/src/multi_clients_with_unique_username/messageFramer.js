class MessageFramer{
    constructor(onMessage){
        this.buffer=Buffer.alloc(0);
        this.onMessage=onMessage
    }
    push(chunk){
        this.buffer=Buffer.concat([this.buffer,chunk])
         while(this.buffer.length >=4){
            const msgLength=this.buffer.readUInt32BE(0);
            if(this.buffer.length<4+msgLength)
                break;
         }
         const msgBuffer=
    }
   
}