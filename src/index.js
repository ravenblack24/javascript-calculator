import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactFCCtest from 'react-fcctest';

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
			display: 0,
			formula: 0,
			lastWasOperator: false,
		}
		this.handleClear = this.handleClear.bind(this);
		this.handleEquals = this.handleEquals.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
	}

	handleClear() {
		this.setState({display: 0, formula: 0, lastWasOperator: false});
	}

	handleEquals() {	
		console.log(this.state.formula);
		var result = this.getResult(this.state.formula);
		const formula = this.state.formula+"="+result;

		this.setState({
			display: result,
			formula 
		});
	}

	getResult(formula)  {
		return new Function('return ' + formula) ();
	}

	handleDecimal() {
		var display = this.state.display;
		if(!display.includes(".")) {
			this.setState({
				formula: this.state.formula+".",
				display: this.state.display+"."
			})
		}
	}

	handleNumber(num) {
		var formula;
		var display = this.state.display;
		if(this.state.formula === 0) {
			if(num > 0) {
				formula = num; 
				display = num;
			} else {
				return;
			}
		}
		else {
			formula = this.state.formula+num;

			if(this.state.lastWasOperator) {
				display = num;
			} else {
				display = display+num;
			}
		}
		this.setState({formula, display, lastWasOperator: false})
	}

	handleOperator(operator) {
		var formula = this.state.formula;

		if(formula.includes("=")) {
			formula = this.state.display;
		} else {
			if(this.state.lastWasOperator && operator !== "-") {
				formula = formula.slice(0, formula.length-1);
			}
		}
		var result = formula+operator;
		this.setState({
			formula: result, 
			display: operator, 
			lastWasOperator: true
		});
	}

	render() {
		return (
			<React.Fragment>
				<div id="container">
					<div id="display-section">
						<div id="formula">{this.state.formula}</div>
						<div id="display">{this.state.display}</div>
					</div>
					<InputControl handleNumber={e => this.handleNumber(e)} handleOperator={e=>this.handleOperator(e)} handleEquals={this.handleEquals} handleClear={this.handleClear} handleDecimal={this.handleDecimal}/>
				</div>
				<ReactFCCtest />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
  <React.StrictMode>
   	<Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
