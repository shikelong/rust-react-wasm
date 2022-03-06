import React, {useState} from "react";
import ReactDOM from "react-dom";


const wasm = import("../build/rust_react_wasm");

wasm.then((m) => {
  const App = () => {
    const [name, setName] = useState("");
    const handleChange = (e) => {
      setName(e.target.value);
    }
    const handleClick = () => {
      m.welcome(name);
    }
    return (<div>
      <h1>Hello</h1>
      <button onClick={m.big_computation}>Run Computation</button>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Say Hello</button>
    </div>)
  }

  ReactDOM.render(<App></App>, document.getElementById("root"));
})