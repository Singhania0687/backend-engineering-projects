import menu from './menu.js'
import getUserChoice from './getUserChoice.js'
import scheduleTask from'./scheduleTask.js'
async function  main(){
      console.log("Welcome to my event-loop visualizer tool")
      menu()
      const choices=await getUserChoice()
      scheduleTask(choices)
}
main()