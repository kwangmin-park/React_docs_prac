// React 연습 ch6. 이벤트 처리하기


// HTML 버전
<button onclick="activeLaser()">
	Activate Lasers
</button>

// react 버전
<button onClick={activateLasers}>
	Activate Lasers
</button>


// React에서는 false를 반환해도 기본 동작을 방지할 수 없다. 반드시 preventDefault를 명시적으로 호출해야한다. 
function Form(){
	function handleSubmit(e){
		e.preventDefault();
		console.log("you clicked submit.");
	}

	return(
		<form onSubmit={handleSubmit}>
			<button type="submit">Submit</button>
		</form>
	);
}

// React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요 없이 엘리먼트가 처음 렌더링 될 때 리스너를 제공하면 된다.
// 일반적으로 이벤트 핸들러를 클래스의 메서드로 만드는 것.
class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn : true};

// 콜백에서 this가 작동하려면 아래와 같이 바인딩해줘야 한다.
		this.handleClick = this.handleClick.bind(this);
	}

// JS에서 클래스 메서드는 기본적으로 바인딩 되어 있지 않으므로 this.handleClick을 바인딩하지 않고 onClick에 전달할 경우 실제 this는 undefined가 된다. ()를 사용하지 않고 메서드를 참조할 경우는 해당 메서드를 바인딩해야한다.
	handleClick(){
		this.setState(prevState => ({
			isToggleOn : !prevState.isToggleOn
		}));
	}

	render(){
		return (
			<button onClick={this.handleClick}> //함수와 다르게 this를 안붙이면 인식하지 못함. 주의.
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}


