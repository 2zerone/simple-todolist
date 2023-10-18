import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  }

  const onChangeCheckBox = (e) => {
    setTodo((prevTodo) => {
      const nextTodo = [...prevTodo];
      nextTodo[index] = {...nextTodo[index]};
      nextTodo[index].completed = e.target.check;
      return nextTodo;
    })
  }

  useEffect(() => {
    // todo가 바뀌었는지 감지
  }, [todo]);

  const onSubmit = (e) => {
    e.preventDefault(); // form은 기본적으로 제출하게 되면 페이지가 새로고침 => SPA에서는 웬만하면 새로고침을 막아야함
    const nextTodo = [...todo, { title: newTodo, completed: false, id: Math.random() }]; // immer library 사용하면 더 깔끔하게 정리 가능
    setTodo(nextTodo);
  }

  return (
    <>
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가해보세요.</div>
            <TodoForm onChangeNewTodo={onChangeNewTodo} newTodo={newTodo} onSubmit={onSubmit} />
          </div>
        ) : (
          <>
            {todo.map((v, i) => (<TodoItem key={v.id} index={i} item={v} onChange={onChangeCheckBox} />))}
            <TodoForm onChangeNewTodo={onChangeNewTodo} newTodo={newTodo} onSubmit={onSubmit} />
          </>
        )}
        
      </div>
    </>
  )
}

export default App
