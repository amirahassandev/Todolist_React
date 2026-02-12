import { createContext, useReducer } from "react";
import { TodoReducer } from "../Reducers/todoReducer";


export const TodosContext = createContext([])
const TodosProvider = ({children}) => {
    const [todos, todosDispatch] = useReducer(TodoReducer, [])
    return (
        <TodosContext.Provider value={{todos: todos, dispatch: todosDispatch}}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosProvider