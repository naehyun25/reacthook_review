import React, { useState, useCallback, useEffect } from 'react';

function Box({createBoxStyle}){
  const [style,setStyle] = useState({});
  useEffect(()=>{
    console.log("박스 사이즈 업")
    setStyle(createBoxStyle);
  },[createBoxStyle])
  return <div className='box' style={style}></div>
}

const CBtwo = ()=>{
  const [size,setSize] = useState(100);
  const [mode,setMode] = useState(false);
  // mode 를 바꿀 때도 얘가 변한다고 인식되기 때문에 얘를 useCallback으로 감싸기
  const createBoxStyle = useCallback(()=>{
    return {
      width:`${size}px`,
      height:`${size}px`,
      background:"cadetblue"
    }
  },[size])
  return(
    <div style={mode?{background:'#585858'}:{background:'#fff'}}>
      <input type="number" value={size} onChange={(e)=>{setSize(e.target.value)}} />
      <button onClick={()=>{setMode(!mode)}}>🌜 mode</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}

export default CBtwo;