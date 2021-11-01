// react ch10. state 끌어올리기(온도 계산기 예시)



function BoilingVerdict(props){
	if(props.celsius >= 100){
		return <p>The water would boil.</p>;
	}
	else{
		return <p>The water would not boil.</p>;
	}
}

// Calculator는 온도를 입력하는 input을 갖고, this.state.temperature에 저장
class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temperature:''};
	}

	handleChange(e){
		this.setState({temperature:e.target.value});
	}

	render(){
		const temperature = this.state.temperature;
		return(
			<fieldset>
				<legend>Enter temperature in Celsius:</legend>
				<input
					value = {temperature}
					onChange={this.handleChange}/>

				<BoilingVerdict
					celsius={parseFloat(temperature)}/>
			</fieldset>
		);
	}
}

// 추가 요청으로 섭씨, 화씨 모두 사용해야 하는 경우.

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    // this.setState({temperature: e.target.value});
    // 끌어올리기를 통해 props로 넘어올 경우 값 변경이 안되므로(props는 읽기 전용) 부모의 이벤트를 호출한다. 
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// 이렇게 할 경우 c나 f 둘중 하나에 온도를 입력하더라도 다른 하나에는 갱신되지 않음.(c의 temperatur를 변경해도 f의 temperature는 변경되지 않음.) > temperatur를 끌어올려야함
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

// 수정후의 Calculator
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}