 import taskName from './taskName.js'
 import fs from 'fs'
 import visualizePhase from './visualize.js'
  export default function scheduleTask(options){

      console.log('\nTasks scheduled:',options);
   options.forEach(x=>{
    console.log('-',taskName(x))
   })

   console.log('\n===== Event Loop Execution =====');

   options.forEach(choice=>{
    switch (choice){
        case '1':
            setTimeout(() => {
          visualizePhase('timers', 'setTimeout 0ms');
        }, 0);
            break;
        case '2':
            setImmediate(() => {
          visualizePhase('check', 'setImmediate');
        });
            break;
        case '3':
            process.nextTick(() => {
          visualizePhase('nextTick', 'process.nextTick');
        });
            break;
        case '4':
            Promise.resolve().then(() => {
          visualizePhase('microtasks', 'Promise.then');
        });
             break;
         case '5':
             fs.readFile(__filename, () => {
          visualizePhase('poll', 'fs.readFile');
        });
             break;
        default :
             console.log('Wrong choice entered re run the program again')
             break;
    }
   })

}
