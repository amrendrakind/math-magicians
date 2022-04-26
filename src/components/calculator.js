import React from 'react';

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
      value: '',
    };
  }

  OnValueChange(newValue) {
    if (newValue.length > 0) {
      this.setState((prevState) => ({ value: prevState.value.concat(newValue) }));
    } else this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <input type="text" placeholder="0" className="CalcInput" value={value} readOnly />
        ;
        <h1>
          Welcome to Calculator
          {buttons[0].label}
        </h1>
      </div>
    );
  }
}
export default Calculator;
