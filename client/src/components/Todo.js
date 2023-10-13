import React, { useState } from 'react';

export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem); //todoItem은 객체, id 값만 받아와도 되지만 추후 수정의 편의성 위해 값 다 받음
  };

  // title 클릭하면 readOnly를 false변경 (수정 가능하도록)!!
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // title 수정
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value, //현재 유저가 입력하고 있는  value값
      ...rest,
    });
  };

  // Enter 키 누르면 readOnly true로 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true); //true라는 것은 수정이 끝났다는 것
      updateItem(todoItem); //엔터키 누르면 저장
    }
  };

  //checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    // console.log(e);
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked, //현재 유저가 입력하고 있는  value값
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem); //체크박스 변경시 저장
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
        className="relative ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-full border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
        className="pl-4 rounded-[0.5rem] !border !border-gray-300 bg-white text-blue-950 shadow-lg shadow-gray-900/5 ring-4 ring-transparent  focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 opacity-[0.6]"
      />
      {/* 클릭시 readOnly를 통해 boolean변화로 수정이 가능한 상태로 변환 */}
      {/* onChange;로 변화하는 수정 상태를 반영 */}
      <button
        onClick={onDeleteButtonClick}
        className="mx-4 bg-blue-500  text-white  hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-[0.8]"
      >
        delete
      </button>
    </div>
  );
}
