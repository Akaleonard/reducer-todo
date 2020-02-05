export const initialState = {
    todoList: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }]
}

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, todoList: [...state.todoList, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }]}
        case "TOGGLE_TODO":
            return {...state, todoList: state.todoList.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            })}
        case "CLEAR_COMPLETE":
            return {...state, todoList: state.todoList.filter(todo => {
                if (todo.completed === true) {
                    return false;
                } else {
                    return true;
                }
            })}
    default:
    return state;
    }
}
