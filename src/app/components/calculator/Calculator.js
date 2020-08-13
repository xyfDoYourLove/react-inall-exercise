import React from 'react';
import CalculatorButton from './CalculatorButton';

class Calculator extends React.Component{

  state = {
    value: 0,
    curOperator: '',
    func:'',
  }

  handleCalcutor = (input) => {
    switch(this.state.curOperator) {
      case '+':
        return this.state.value + input;
      case '-':
        return this.state.value - input;
      case '*':
        return this.state.value * input;
      case '=':
        return this.state.value * input;
      default:
        return input;
    }
  }

  handleEquelAndClear = (input) => {
    switch(input) {
      case '=':
        this.setState({
          func: this.state.value,
          curOperator: ""
        })
        break;
      case 'clear':
        this.setState({
          value: 0,
          curOperator: '',
          func:'',
        })
        break;
      default:
        this.setState({
          curOperator: input
        })
    }
  }

  onHandleClick = (input) => {
    this.setState({
      func: input
    })
    if (isNaN(input * 1)) {
      this.handleEquelAndClear(input);
    }else {
      if(!this.state.curOperator) {
        this.setState({
          value: input
        })
      }else {
        this.setState({
          value: this.handleCalcutor(input),
          curOperator: '',
        })
      }
    }
  }

  render() {
    return (<div className="calculator">
    This is calculator page
    <table>
      <thead>
        <tr>
          <td colSpan="3"><input value={this.state.func} className="txt" type="text" disabled/></td>
        </tr>
        {/* <tr>
          <td colSpan="3"><input value={this.state.value} className="txt" type="text" disabled/></td>
        </tr> */}
      </thead>
      <tbody>
        <tr>
          <td><CalculatorButton value={'+'} isOperator={true} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={'-'} isOperator={true} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={'*'} isOperator={true} onHandleClick={this.onHandleClick}/></td>
        </tr>
        <tr>
          <td><CalculatorButton value={7} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={8} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={9} isOperator={false} onHandleClick={this.onHandleClick}/></td>
        </tr>
        <tr>
          <td><CalculatorButton value={4} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={5} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={6} isOperator={false} onHandleClick={this.onHandleClick}/></td>
        </tr>
        <tr>
          <td><CalculatorButton value={1} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={2} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={3} isOperator={false} onHandleClick={this.onHandleClick}/></td>
        </tr>
        <tr>
          <td><CalculatorButton value={0} isOperator={false} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={'clear'} isOperator={true} onHandleClick={this.onHandleClick}/></td>
          <td><CalculatorButton value={'='} isOperator={true} onHandleClick={this.onHandleClick}/></td>
        </tr>
      </tbody>
    </table>
  </div>);
  }
}

export default Calculator;