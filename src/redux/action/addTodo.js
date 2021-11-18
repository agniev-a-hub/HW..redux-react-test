import { ADD_TODO, REMOVE_TODO } from "../actionTypes/actionTypes";
let nextTodoID = 0;

export const addTodo = (header, content) => {
    console.log('const addTodo = (header, content) => worked action')
    return {
        type: ADD_TODO, 
        payload: {id: ++nextTodoID, header, content}
    };
}

//non working removeTodo 

export const removeTodo = (id) => {
    console.log('export const removeTodo = (id) =>')
    console.log('removeTodo ACTION tried to delete Todo', id)
    return {
        type: REMOVE_TODO,
        payload: id
    };
}
