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
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      {/* 클릭시 readOnly를 통해 boolean변화로 수정이 가능한 상태로 변환 */}
      {/* onChange;로 변화하는 수정 상태를 반영 */}
      <button onClick={onDeleteButtonClick}>delete</button>
    </div>
  );
}
