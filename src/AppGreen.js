import React,{useState} from 'react';
import UEone from './useEffect/useEffect01';
import UEtwo from './useEffect/useEffect02';
import './App.css';

function App() {
  const [show,setShow] = useState(false); 
  return (
    <div className="App">
      <UEone />
      {show && <UEtwo />}
      <button onClick={()=>{setShow(!show);}}>STOP</button>
    </div>
  );
}

export default App;