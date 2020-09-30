import React from 'react';
import InputControl from './InputControl';
import Display from './Display';

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 0,
			formula: "",
			operatorCount: 0
		}
		this.handleClear = this.handleClear.bind(this);
		this.handleEquals = this.handleEquals.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
	}

	handleClear() {
		this.setState({display: 0, formula: "", operatorCount: 0});
	}

	handleEquals() {	
		var formula = this.state.formula;
		const opCount = this.state.operatorCount;

		if(opCount > 0) {
			formula = formula.slice(0, formula.length-opCount);
		}
		if(formula[0] !== "+" && formula[0] !== "/" && formula[0] !== "*") {		
			var result = this.getResult(formula);
			const finalFormula = formula+"="+result;

			this.setState({
				display: result,
				formula: finalFormula 
			});
		}
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
		if(this.state.formula === "") {
			if(num > 0) {
				formula = num; 
				display = num;
			} else {
				return;
			}
		}
		else {
			formula = this.state.formula+num;

			if(this.state.operatorCount > 0) {
				display = num;
			} else {
				display = display+num;
			}
		}
		this.setState({formula, display, operatorCount: 0})
	}

	handleOperator(operator) {
		var formula = this.state.formula;
		var count = this.state.operatorCount;

		if(formula !== "") {		
			if(formula.includes("=")) {
				formula = this.state.display;
			} else {
				if(this.state.operatorCount === 1 && operator !=="-") {
					formula = formula.slice(0, formula.length-1);
					count = count-1;
				} 
				if(this.state.operatorCount > 1){
					formula = formula.slice(0, formula.length-2);
					count = count-2;
				}
			}
		}
		var result = formula+operator;
		count++;
		this.setState({
			formula: result, 
			display: operator, 
			operatorCount: count
		});
	}

	render() {
		return (
			<React.Fragment>
				<div id="container">
					<div id="display-section">
						<Display id="formula" value={this.state.formula} />
						<Display id="display" value={this.state.display} />
					</div>
					<InputControl handleNumber={e => this.handleNumber(e)} handleOperator={e=>this.handleOperator(e)} handleEquals={this.handleEquals} handleClear={this.handleClear} handleDecimal={this.handleDecimal}/>
				</div>
			</React.Fragment>
		);
	}
}