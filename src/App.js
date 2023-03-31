import './App.css';
import React, { useState } from "react";

export const useInput = (initialValue, validater) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    // e.target = value;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validater(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default function App() {
  const maxLength = (value) => value.length < 10;
  const name = useInput("mr,", maxLength);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}


export  {App};
