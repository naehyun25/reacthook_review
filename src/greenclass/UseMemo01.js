import React, { useState, useMemo } from "react";

const hardCalc = (num) => {
  console.log('💫hc');
  return num + 10000;
};

const easyCalc = (n)=>{
  console.log('✨easy');
  return n + 1;
}

const MemoOne = () => {
  const [num, setNum] = useState(1);
  const [n,setN] = useState(1);

  const result = useMemo(()=>{hardCalc(num);},[num])
  const easyResult = easyCalc(n);

  return (
    <div>
      <h3>10000 계산기</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
        />
      <h4>+10000={result}</h4>
      <br />
      <h3>1 계산기</h3>
      <input type="number" value={n} onChange={(e)=>{setN(parseInt(e.target.value))}} />
      <h4>+1={easyResult}</h4>
    </div>
  );
};
export default MemoOne;