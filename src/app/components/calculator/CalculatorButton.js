import React, {Component} from 'react';

class CalculatorButton extends Component {
    
    // state = {
    //     value: this.props.value,
    //     isOperator: this.props.isOperator,
    // };

    render() {
        return (
            <div>
                <button 
                    className='btn btn-primary' 
                    key={this.props.value} 
                    onClick={() => this.props.onHandleClick(this.props.value)}>
                    {this.props.value}
                </button>        
            </div>
        );
    }
}

export default CalculatorButton;
