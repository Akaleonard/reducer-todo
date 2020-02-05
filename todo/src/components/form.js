import React, { useState } from 'react';

const Form = ({addTodo, clearComplete}) => {
    const [item, setItem] = useState("")

    const handleChanges = e => setItem(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(item);
        setItem("");
    }
    const handleClear = event => {
        event.preventDefault();
        clearComplete();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={item}
                onChange={handleChanges}
                name="item"
            />
            <button type="submit">Add</button>    
            <button onClick={handleClear}>Clear</button>
        </form>
    )
}

export default Form;