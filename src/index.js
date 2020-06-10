import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InputControl extends React.Component {
	render() {
		return (
			<div id="controls">
				<button value={"AC"} id={"clear"} onClick={this.props.handleClear} className="clear" >AC</button>
				<button value={"/"} id={"divide"} onClick={e => this.props.handleOperator(e.target.value)}>/</button>
				<button value={"*"} id={"multiply"} onClick={e => this.props.handleOperator(e.target.value)}>*</button>
				<button value={7} id={"seven"} onClick={e => this.props.handleNumber(e.target.value)} >7</button>
				<button value={8} id={"eight"} onClick={e => this.props.handleNumber(e.target.value)} >8</button>
				<button value={9} id={"nine"} onClick={e => this.props.handleNumber(e.target.value)} >9</button>
				<button value={4} id={"four"} onClick={e => this.props.handleNumber(e.target.value)} >4</button>
				<button value={5} id={"five"} onClick={e => this.props.handleNumber(e.target.value)} >5</button>
				<button value={6} id={"six"} onClick={e => this.props.handleNumber(e.target.value)} >6</button>
				<button value={1} id={"one"} onClick={e => this.props.handleNumber(e.target.value)} >1</button>
				<button value={2} id={"two"} onClick={e => this.props.handleNumber(e.target.value)} >2</button>
				<button value={3} id={"three"} onClick={e => this.props.handleNumber(e.target.value)} >3</button>
				<button value={0} id={"zero"} onClick={e => this.props.handleNumber(e.target.value)} >0</button>
				<button value={"-"} id={"subtract"} onClick={e => this.props.handleOperator(e.target.value)} >-</button>
				<button value={"+"} id={"add"} onClick={e => this.props.handleOperator(e.target.value)} >+</button>
				<button value={"."} id={"decimal"} onClick={this.props.handleDecimal} >.</button>
				<button value={"="} id={"equals"} onClick={this.props.handleEquals} >=</button>
			</div>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			previous: 0,
			formula: 0
		}
		this.handleClear = this.handleClear.bind(this);
		this.handleEquals = this.handleEquals.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
	}

	handleClear() {
		this.setState({current: 0, formula: 0});
	}

	handleEquals() {
		/**var result = eval(this.state.formula);
		this.setState({ current: result, sum: this.state.formula.concat("="+result)});*/
	}

	handleDecimal() {
		const current = this.state.current+".";
		this.setState({
			formula: current,
			current: current
		})
	}

	handleNumber(num) {
		var previous;
		var formula;
		if(this.state.formula === 0) {
			previous = 0;
			formula = num;
		} else {
			previous = this.state.current;
			formula = this.state.formula+num;
		}
		this.setState({formula, current: num, previous})
	}

	handleOperator(operator) {
		var result = this.state.formula+operator;
		this.setState({formula: result, current: operator});
	}

	render() {
		return (
				<div id="container">
					<div id="display-section">
						<div id="formula">{this.state.formula}</div>
						<div id="display">{this.state.current}</div>
					</div>
					<InputControl handleNumber={e => this.handleNumber(e)} handleOperator={e=>this.handleOperator(e)} handleEquals={this.handleEquals()} handleClear={this.handleClear} handleDecimal={this.handleDecimal}/>
				</div>

		);
	}
}

ReactDOM.render(
  <React.StrictMode>
   	<Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
