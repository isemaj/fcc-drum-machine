import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectKit } from '../actions/index';

class Kit extends Component {
  constructor(props) {
    super(props);
  }

  validateCheck = () => {
  console.log(this.checked);
  this.props.selectKit(this.checked);
}

  render() {
    return (
      <React.Fragment>
        <input id="kit-selector" type="checkbox" onClick={this.validateCheck} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectKit,
}, dispatch);

export default connect(null, mapDispatchToProps)(Kit);
