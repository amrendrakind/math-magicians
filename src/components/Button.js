import React from 'react';
import PropTypes from 'prop-types';

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
};

Button.propTypes = {
  label: PropTypes.string,
};
