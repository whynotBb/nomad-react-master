import { log } from "console";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onchange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    // react typescript target-> currentTarget 으로 쓴다.
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`hello ${value}`);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="username"
          value={value}
          onChange={onchange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
