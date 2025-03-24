import { useState } from "react";
import { LanguageServiceMode } from "typescript";
function App() {
  const [text, settext] = useState(" ");
  function handleChnage(e) {
    settext(e.target.value);
  }
  function handleClick() {
    settext(text);
  }
  return (
    <>
      <h1>Hello World!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChnage}
      ></input>
      <button onClick={handleClick}>Submit</button>
      <label>{settext}</label>
    </>
  );
}

export default App;
