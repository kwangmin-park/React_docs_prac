// ch8. 리스트와 key

// js에서의 map
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2); //[2,4,6,8,10]
console.log(doubled);


// react에서의 map 사용 예시
const listItems = numbers.map((number) => <li>{number}</li>);

ReactDOM.render(
	<ul>{listItems}</ul>,
	document.getElementById('root')
);


// 컴포넌트 안에서 리스트 렌더링
function NumberList(props){
	const numbers = pops.numbers;
	// element list를 만들때 각 항목에 key를 할당해야한다.
	// key는 React가 어떤 항목을 변경, 추가, 삭제할지 식별하는 것을 돕는다.(고유성)
	// 엘리먼트 리스트에 key를 명시하지 않으면 기본적으로 인덱스를 key로 설정하나 이는 권장되지 않는다.
	// key는 하위 컴포넌트의 props로 넘어가지 않는다.(리액트에 도움을 주는 역할)
	const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
	return (
		<ul>{listItems}</ul>
	);
}

ReactDOM.render(
	<NumberList numbers ={numbers} />,
	document.getElementById('root')
);



