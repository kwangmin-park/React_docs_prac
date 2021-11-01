// React 7.조건부 렌더링

// 애플리케이션 상태에 따라 컴포넌트 중 몇개만을 렌더링 가능


function Greeting(props){
	// property로 넘어온 isLoggedIn 에 따라 Lengerinf 컴포넌트 변경
	const isLoggedIn = pops.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />;
	}
	else{
		return <GestGreeting />;
	}
}

ReactDOM.render(
	<Greeting isLoggedIn={false}/>,
	document.getElementById('root')
);


// 엘리먼트 변수
function LoginButton(props){
	return(
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props){
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
