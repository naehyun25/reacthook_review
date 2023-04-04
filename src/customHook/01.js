import { useInput } from './useInput';

function displayMsg(msg){
    alert(msg)
}

function C01() {
	// const [value, setValue] = useState('');

	// const handleChange = (e) => {
	// 	setValue(e.target.value);
	// };
    const [value, handleChange,handleSubmit] = useInput('시작',displayMsg);
    const [value2, handleChange2,handleSubmit2] = useInput('중간',displayMsg);
    const [value3, handleChange3,handleSubmit3] = useInput('마지막',displayMsg);
    //const [value2, handleChange2] = useInput('추가');


    // const handleSubmit = () => {
    //     alert(value);
    //     setValue("");
    // }

	return (
		<div>
			<h1>customHook</h1>
			<p>{value}</p>
			<input type="text" onChange={handleChange} value={value} />
			<button onClick={handleSubmit}>확인</button>
			<input type="text" onChange={handleChange2} value={value2} />
			<button onClick={handleSubmit2}>확인</button>
			<input type="text" onChange={handleChange3} value={value3} />
			<button onClick={handleSubmit3}>확인</button>
		</div>
	);
}

export default C01;