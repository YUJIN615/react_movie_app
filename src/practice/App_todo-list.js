import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  // console.log(toDo);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return false;
    // 배열에 추가
    else setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  }
  console.log(toDos)
  return (
    <div>
      <h1>To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
