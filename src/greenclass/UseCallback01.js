import React, { useCallback, useEffect, useState } from "react";

const CBone = () => {
  const [num, setNum] = useState(0);

  const fn = useCallback(()=>{
    console.log(`"함수:" ${num}`);
  },[num])

  useEffect(()=>{
    console.log(`Fn이 변경 됨`)
  },[fn])

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <hr />
      <button onClick={fn}>함수호출</button>
    </div>
  );
};
export default CBone;