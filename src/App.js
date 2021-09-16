import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const btnClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const btnClear = (event) => {
    setResult("");
  };

  const btnDel = () => {};

  const btnResult = () => {};

  return (
    <>
      <div className="container">
        <h1>Calculator</h1>
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={btnClear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={btnDel} id="del">
            Del
          </button>
          <button name="/" onClick={btnClick}>
            /
          </button>
          <button name="7" onClick={btnClick}>
            7
          </button>
          <button name="8" onClick={btnClick}>
            8
          </button>
          <button name="9" onClick={btnClick}>
            9
          </button>
          <button name="*" onClick={btnClick}>
            *
          </button>
          <button name="4" onClick={btnClick}>
            4
          </button>
          <button name="5" onClick={btnClick}>
            5
          </button>
          <button name="6" onClick={btnClick}>
            6
          </button>
          <button name="-" onClick={btnClick}>
            -
          </button>
          <button name="1" onClick={btnClick}>
            1
          </button>
          <button name="2" onClick={btnClick}>
            2
          </button>
          <button name="3" onClick={btnClick}>
            3
          </button>
          <button name="+" onClick={btnClick}>
            +
          </button>
          <button name="0" onClick={btnClick}>
            0
          </button>
          <button name="." onClick={btnClick}>
            .
          </button>
          <button
            className="highlight"
            name="="
            onClick={btnResult}
            id="result"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
