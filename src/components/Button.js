import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/Calculate';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { label, OnValueChange, objCalculation } = this.props;
    const calc = calculate(objCalculation, label);
    OnValueChange(calc);
  }

  render() {
    const { label } = this.props;
    return (
      <button type="button" className={`calButton ${label === '0' ? 'zeroButton' : ' '}`} onClick={this.clickHandler}>{label}</button>
    );
  }
}

export default Button;

// Creating default props

Button.defaultProps = {
  label: 'Button',
  OnValueChange: () => {},
  objCalculation: {
    total: null,
    next: '0',
    operator: null,
  },
};

// Creating overirde props

Button.propTypes = {
  label: PropTypes.string,
  OnValueChange: PropTypes.func,
  objCalculation: PropTypes.objectOf({
    total: PropTypes.string,
    next: PropTypes.string.isRequired,
    operator: PropTypes.string,
  }),
};
