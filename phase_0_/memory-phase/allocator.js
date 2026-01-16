let junk = [];
let allocTimer;
export default function maybeAllocate(size) {
   allocTimer=setInterval(() => {
    // to consume the memory
    junk.push(Buffer.alloc( size* 1024 * 1024).fill(0));
  }, 1000);
}


export function stopAllocation() {
    clearInterval(allocTimer);
}
