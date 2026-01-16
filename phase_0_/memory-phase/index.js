import monitor from './monitor.mjs'
import allocator,{stopAllocation} from './allocator.js'
import choices from './choices.js';

const { monitorChoice, allocateChoice } = choices;

async function main(){
    console.log(" Hey Welcome to the CLI , first enter the size of memory you want to allocate \n Then enter the monitoring interval and duration without using any comma ")
    const allocatorChoices=await allocateChoice();
    const monitorChoices=await monitorChoice();
    allocator(allocatorChoices)
monitor(monitorChoices)
setTimeout(stopAllocation, monitorChoices.duration * 1000);


}
main()
