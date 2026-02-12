
import { v4 as uuidv4 } from 'uuid';

export function TodoReducer(currentState, action){
    let updateTodos = []
    

    switch(action.type){
        case "Added":
            const newTodo = {
                id: uuidv4(),
                title: action.payload.title,
                details: "",
                isCompleted: false
            }
            updateTodos = [...currentState, newTodo]
            localStorage.setItem("todo", JSON.stringify(updateTodos))
            console.log(updateTodos)
            return updateTodos
        
        case "Deleted":
            updateTodos = currentState.filter(t => t.id != action.payload.id)
            localStorage.setItem("todo", JSON.stringify(updateTodos))
            return updateTodos

        case "Updated":
            updateTodos = currentState.map((t) => {
                if(t.id == action.payload.id){
                    return {...t, title: action.payload.title, details: action.payload.details}
                }else{
                    return t
                }
            })
            localStorage.setItem("todo", JSON.stringify(updateTodos))
            return updateTodos


        case "Check":
            updateTodos = currentState.map((t) => {
                if(t.id == action.payload.id){
                    const updatedTodo = {...t, isCompleted : !t.isCompleted}
                    return updatedTodo
               }                
                return t
            })

            localStorage.setItem("todo", JSON.stringify(updateTodos))
            return updateTodos


        case "Get":
            const todosStorage = JSON.parse(localStorage.getItem("todo"))
            if (todosStorage) {
                return todosStorage
            } else {
                return currentState  // لو مفيش بيانات
            }


        default: {
            throw Error ("Unknown Action " + action.type)
        }
        
    }
}   