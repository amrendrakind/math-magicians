import React from 'react';
import Button from './Button';

const buttons = [
  {
    label: 'AC',
    isOperator: true,
  },
  {
    label: '+/-',
    isOperator: true,
  },
  {
    label: '%',
    isOperator: true,
  },
  {
    label: '÷',
    isOperator: true,
  },
  {
    label: '7',
    isOperator: false,
  },
  {
    label: '8',
    isOperator: false,
  },
  {
    label: '9',
    isOperator: false,
  },
  {
    label: 'x',
    isOperator: true,
  },
  {
    label: '4',
    isOperator: false,
  },
  {
    label: '5',
    isOperator: false,
  },
  {
    label: '6',
    isOperator: false,
  },
  {
    label: '-',
    isOperator: true,
  },
  {
    label: '1',
    isOperator: false,
  },
  {
    label: '2',
    isOperator: false,
  },
  {
    label: '3',
    isOperator: false,
  },

  {
    label: '+',
    isOperator: false,
  },

  {
    label: '0',
    isOperator: false,
  },
  {
    label: '.',
    isOperator: true,
  },
  {
    label: '=',
    isOperator: true,
  },
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '0',
      operation: null,
    };
    this.OnValueChange = this.OnValueChange.bind(this);
  }

  OnValueChange(calculate) {
    this.setState({ ...calculate });
  }

  render() {
    const { total, next, operation } = this.state;
    let val;
    if (total !== null && next === null) {
      val = total;
    }
    if (total === null && operation === null) {
      val = next;
    }
    if (total !== null && operation !== null) {
      val = total + operation;
    }
    if (total !== null && operation !== null && next !== null) {
      val = total + operation + next;
    }
    return (
      <div className="calContainer">
        <input type="text" placeholder="0" className="calInput" value={val} readOnly />
        <div className="buttonContainer">
          {
          buttons.map((button) => (
            <Button
              label={button.label}
              OnValueChange={this.OnValueChange}
              objCalculation={this.state}
              key={button.id}
            />
          ))
      }
        </div>
      </div>
    );
  }
}
export default Calculator;
