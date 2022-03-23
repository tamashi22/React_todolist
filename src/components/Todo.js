import React, { useState } from 'react';
import TodoForm from './TodoForm';
import{AiOutlineClose}from 'react-icons/ai';
import{AiOutlineEdit}from 'react-icons/ai';
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo__row complete' : 'todo__row'}
      key={index}>

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <AiOutlineClose 
        onClick={()=>removeTodo(todo.id)}
        className="delete__icon"/>
        <AiOutlineEdit 
        onClick={()=>setEdit({id: todo.id,value:todo.text})}
        className="edit__icon"/>
      </div>
    </div>
  ));
};

export default Todo;