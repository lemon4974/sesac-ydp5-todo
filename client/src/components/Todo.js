import React from 'react';

export default function Todo({ item }) {
  const { id, title, done } = item;

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
    </div>
  );
}
