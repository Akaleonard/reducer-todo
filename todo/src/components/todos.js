import React from 'react';

const Todo = ({todoList, toggleTodo}) => {
    return (
        <div>
            {todoList.map(item => {
                return (
                    <div key={item.id} onClick={() => toggleTodo(item.id)} className={item.completed ? "completed" : ""}>
                        {item.item}
                    </div>
                )
            })}
        </div>
    );
}
export default Todo;