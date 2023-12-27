import React, { useState, useRef } from "react";
interface Props {
  onSubmit(data: string): void;
}

const NewTodo: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;
    props.onSubmit(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
