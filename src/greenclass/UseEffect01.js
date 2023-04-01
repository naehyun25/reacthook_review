import React, { useEffect, useState } from "react";

const UEone = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("마운팅 되었나요? 🤔");
  },[]);
  useEffect(() => {
    console.log("렌더링 완료 😎");
  });
  useEffect(() => {
    console.log("카운트 변경 🙄");
  },[count]);


  const [text,setText] = useState('');
  function textChange(e){
    setText(e.target.value);
  }

  return (
    <div>
      <h2>클릭한 횟수: {count}</h2>
      <button type="button" onClick={(e) => setCount((count) => count + 1)}>
        Click Me!
      </button>
      <br />
      <br />
      <input type="text" value={text} onChange={textChange} />
      <p>입력한 글자: {text}</p>
    </div>
  );
};
