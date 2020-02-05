import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import Todo from './components/todos';
import Form from './components/form';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  const addTodo =  (item) => {
    dispatch({ type: "ADD_TODO", payload: item }); 
  }

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearComplete = () => {
    dispatch({ type: "CLEAR_COMPLETE" });
  }

  return (
    <div className="App">
      <Todo todoList={state.todoList} toggleTodo={toggleTodo}/>
      <Form addTodo={addTodo} clearComplete={clearComplete}/>
    </div>
  );
}

export default App;
