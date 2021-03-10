import React, { PureComponent } from 'react';

import spinner from 'assets/spinner.gif';
import whiteSpinner from 'assets/white-spinner.gif'

import 'styles/Spinner.css';

interface Props {
  colorized?: boolean;
}

class Spinner extends PureComponent<Props> {
  static defaultProps = {
    colorized: false,
  };

  render() {
    const { colorized } = this.props;
    return (
      <div className="spinner">
        <img src={colorized ? spinner : whiteSpinner} alt="spinner" />
      </div>
    )
  }
}

export default Spinner;
