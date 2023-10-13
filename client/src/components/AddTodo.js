import React, { useState } from 'react';
import '../styles/addtodo.css';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({ title: '' });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({
      title: '',
    });
    // input 초기화
  };
  return (
    <div className="AddTodo">
      <div className="addTodoFlex">
        <input
          type="text"
          placeholder="Add your new todo"
          value={todoItem.title}
          onChange={(e) => setTodoItem({ title: e.target.value })}
          className='mx-auto gap-x-px w-8/12 rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"'
        />
        <button
          type="button"
          className="mt-3 bg-blue-500  text-white  hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onButtonClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
