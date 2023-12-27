import React, { useState } from "react";
import TodoList from "./component/TodoList";
import NewTodo from "./component/NewTodo";

interface Todo {
  id: number;
  text: string;
}
const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodo = (data: string) => {
    setTodoList([...todoList, { id: Math.random() * 10, text: data }]);
  };
  const deleteHandler = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onSubmit={getTodo} />
      <TodoList items={todoList} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
