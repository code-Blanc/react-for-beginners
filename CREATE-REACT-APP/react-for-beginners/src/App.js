import { useEffect, useState } from "react";

function Hello() {
  function hiByeFn () {
    console.log("created :)");
    // 해당 component가 detroyed 될 때
    return function() {
      console.log("destroyed  :(");
    }
  }
  useEffect(hiByeFn, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
