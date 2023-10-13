import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;

  const onDeleteButtonClick = () => {
    deleteItem(todoItem); //todoItem은 객체, id 값만 받아와도 되지만 추후 수정의 편의성 위해 값 다 받음
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteButtonClick}>delete</button>
    </div>
  );
}
