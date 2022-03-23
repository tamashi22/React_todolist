import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleClick} className='todo__form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your task'value={input}
            onChange={handleChange}
            name='text'ref={inputRef}
            className='todo__input edit'
          />
          <button onClick={handleClick} className='todo__button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Input tasks'value={input}
            onChange={handleChange} name='text'
            className='todo__input'
            ref={inputRef}
          />
          <button onClick={handleClick} className='todo__button'>
            ADD
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;