import React from "react";
interface Props {
  items: { id: number; text: string }[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item, i) => {
        return (
          <li key={i}>
            <span>{item.text}</span>
            <button
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
