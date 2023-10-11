import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
  ]);

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = (newItem) => {
    console.log(newItem); //{title: '저녁 먹기}

    //newItems id 키 값 넣고, neItem done 키 값
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    //todoItems 배열에 newItems을 추가
    setTodoItems([...todoItems, newItem]);
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItems 반복,  props 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
