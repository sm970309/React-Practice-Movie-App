import { useState } from "react";

function ToDoListApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo == "") return
    setTodos((current) => [todo, ...current]);
    setTodo("");
  }

  return (
    <div className="App">
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write your to do..."></input>
        <button>Add To do</button>
      </form>
      <hr />
      <ul>{todos.map((item, index) =>
        <span>
          <li key={index}>{item} 
          <button>hi</button></li>
        </span>)
      }
      </ul>

    </div>
  );
}

export default ToDoListApp;