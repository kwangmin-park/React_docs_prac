// ch9.폼

// HTMl 폼 엘리먼트는 자체가 내부 상태를 가지기 때문에 React의 다른 DOM 엘리먼트와 다르게 동작한다.

// HTML FORM 예시
<form>
	<label>
		Name:
		<input type="text" name="name" />
	</label>
	<input type="submit" value = "Submit" />
</form>


// 보통은 form의 기본 액션을 사용하지 않고 js로 데이터를 가공한 뒤 제출하는 방식을 사용 -> 제어 컴포넌트
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


// HTML TextArea
<textarea>
  Hello there, this is some text in a text area
</textarea>


// React TextArea -> value 속성을 통해 값을 표현(input tag와 표현 방법이 같아졌다)
<textarea value={this.state.value} onChange={this.handleChange} />



