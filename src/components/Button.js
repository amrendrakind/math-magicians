/* eslint-disable react/prop-types */
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label } = this.props;
    return (
      <button type="button" className={`calButton ${label === '0' ? 'zeroButton' : ' '}`}>{label}</button>
    );
  }
}

export default Button;

// Creating default props

Button.defaultProps = {
  label: 'Button',
  isOperator: false,
  OnValueChange: () => {},
};
