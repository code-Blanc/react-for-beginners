import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChannge = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currArray => [toDo, ...currArray]);
    setToDo("");
    console.log(toDos);
  };

  return (
    <div>
      <h1>My TODOs ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChannge}
          value = {toDo}
          type="text" 
          placeholder="Write your TODO"

        />
        <button>Add TODO</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
