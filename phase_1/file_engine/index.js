import menu from './src/menu.js'
import UserChoice from './src/user_choice.js'
import operations from './src/operations.js'
export default async function main(){
    menu()
    const choice=await UserChoice()
    operations(choice)
    
}
main()