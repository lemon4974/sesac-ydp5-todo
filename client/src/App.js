import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
// axios를 이용해 백에서 데이터를 가져오기 때문에 axios import
function App() {
  console.log(process.env.REACT_APP_DB_HOST);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      console.log(res.data);

      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (newItem) => {
    console.log(newItem); //{title: '저녁 먹기}

    // //newItems id 키 값 넣고, neItem done 키 값
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;

    // //todoItems 배열에 newItems을 추가
    // setTodoItems([...todoItems, newItem]);
    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
      // request body에 추가되는 객체, newItem 이 이미 객체이기에 별도로 {newItem}으로 감싼 형태 불필요
    ); // axios.post('url' {})
    // console.log(res.data);
    setTodoItems([...todoItems, res.data]); //나머지 정보 추가 후, data로 받아온 값 추가
  };

  // todoItems 상태에 특정 투두를 삭제하는 일
  const deleteItem = async (targetItem) => {
    //id값만 받아도 ok
    console.log(targetItem);

    await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`

      // request body에 추가되는 객체, newItem 이 이미 객체이기에 별도로 {newItem}으로 감싼 형태 불필요
    ); // axios.post('url' {})
    // console.log(res.data);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem //바뀌어야 할 객체 알려줌
    );
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItems 반복,  props 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
}

export default App;
