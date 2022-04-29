import React, { useState } from 'react';
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

function Calculator() {
  const [ValueChange, setValueChange] = useState({ total: null, next: '0', operation: null });

  const OnValueChange = (calculate) => {
    setValueChange({ ...calculate });
  };

  const { total, next, operation } = ValueChange;

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
              OnValueChange={OnValueChange}
              objCalculation={ValueChange}
              key={button.label}
            />
          ))
      }
      </div>
    </div>
  );
}
export default Calculator;
