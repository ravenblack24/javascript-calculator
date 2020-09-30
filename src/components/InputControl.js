import React from 'react';

export default class InputControl extends React.Component {
	render() {
		return (
			<div id="controls">
				<button value={"AC"} id={"clear"} onClick={this.props.handleClear} className="colSpan2 maroon">AC</button>
				<button value={"/"} id={"divide"} onClick={e => this.props.handleOperator(e.target.value)} className="lightGrey">/</button>
				<button value={"*"} id={"multiply"} onClick={e => this.props.handleOperator(e.target.value)} className="lightGrey">x</button>
				<button value={7} id={"seven"} onClick={e => this.props.handleNumber(e.target.value)} >7</button>
				<button value={8} id={"eight"} onClick={e => this.props.handleNumber(e.target.value)} >8</button>
				<button value={9} id={"nine"} onClick={e => this.props.handleNumber(e.target.value)} >9</button>
				<button value={"-"} id={"subtract"} onClick={e => this.props.handleOperator(e.target.value)} className="lightGrey" >-</button>
				<button value={4} id={"four"} onClick={e => this.props.handleNumber(e.target.value)} >4</button>
				<button value={5} id={"five"} onClick={e => this.props.handleNumber(e.target.value)} >5</button>
				<button value={6} id={"six"} onClick={e => this.props.handleNumber(e.target.value)} >6</button>
				<button value={"+"} id={"add"} onClick={e => this.props.handleOperator(e.target.value)} className="lightGrey">+</button>
				<button value={1} id={"one"} onClick={e => this.props.handleNumber(e.target.value)} >1</button>
				<button value={2} id={"two"} onClick={e => this.props.handleNumber(e.target.value)} >2</button>
				<button value={3} id={"three"} onClick={e => this.props.handleNumber(e.target.value)} >3</button>
				<button value={"="} id={"equals"} onClick={this.props.handleEquals} className="rowSpan2 blue">=</button>
				<button value={0} id={"zero"} onClick={e => this.props.handleNumber(e.target.value)} className="colSpan2">0</button>
				<button value={"."} id={"decimal"} onClick={this.props.handleDecimal} >.</button>
			</div>
		);
	}
}