import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectKit } from '../actions/index';

class Kit extends Component {
  constructor(props) {
    super(props);
  }

  validateCheck = () => {
  this.props.selectKit();
}

  render() {
    return (
      <React.Fragment>
      <button className="kit-selector" onClick={this.validateCheck}></button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectKit,
}, dispatch);

export default connect(null, mapDispatchToProps)(Kit);
