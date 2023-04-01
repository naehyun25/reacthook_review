import React, { useEffect } from "react";

const UEtwo = () => {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("⌚⏰⏱⏲🕰");
      // clean-up: 컴포넌트 언마운트시에 실행
    },1000)
    return ()=>{
      clearInterval(timer);
      console.log('unMount 🕳')
    }
  })

  return (
    <div>
      <h2>Timer</h2>
    </div>
  );
};

export default UEtwo;