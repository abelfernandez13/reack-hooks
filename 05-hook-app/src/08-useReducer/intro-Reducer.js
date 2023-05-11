const initialState = [{

    id: 1,
    todo: 'recolectar piedra del alma',
    done: false,

}];

const newTodo = {

    id: 2,
    todo: 'recolectar piedra del roca',
    done: false,

};

export const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {

        return [...state, action.payload]; // ... es el operador spret

    }

    return state;

}

export let todos = todoReducer()

const addTodoAction = {

    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });