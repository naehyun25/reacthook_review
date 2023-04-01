import React, { useState, useMemo, useEffect } from 'react';

const MemoTwo = () => {
	const [num, setNum] = useState(0);
	const [nation, setNation] = useState(true);

  // 원시타입
	// const location = nation ? '국내' : '해외';
  // 이건 string-원시타입이라서 location이 값 그 자체임 '국내' 아니면 '해외'

  // 비원시타입 - 객체
	// const location = {
  //   country: nation ? '국내' : '해외'
  // }
  // 예를 들면 이 비원시타입의 location은 0번지인데

  // 얘가 주소가 바뀌어도 0번지라는걸 알려주려면 useMemo를 사용함
  const location = useMemo(()=>{
    return {
      country: nation ? '국내' : '해외'
    }
  },[nation])

	const msg = (msg) => {
    alert(`${msg}-티켓예매완료`);
	};

  useEffect(()=>{
    console.log('useEffect 호출');
  },[location])
  // 비원시타입으로 바꾸자 location이 바뀌는게 아니어도 콘솔이 출력 됨 
  // 렌더가 될 때마다 이 location은 1번지, 2번지... 이렇게 누를 때마다 바뀌게 되는 것임
  // 그래서 야 이거 주소가 바뀌어도 0번지야 라고 알려주는게 메모이제이션임

	return (
		<div>
			<h3>몇명인가요?</h3>
			<input
				type="number"
				value={num}
				onChange={(e) => {
					setNum(e.target.value);
				}}
			/>
			<hr />
			<p>여행지: {location.country} </p>
			<button
				onClick={() => {
					setNation(!nation);
					msg(location.country);
				}}>
				티켓예매
			</button>
		</div>
	);
};
export default MemoTwo;