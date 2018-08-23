import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ScreenDisplay extends Component {
  render() {
  	const lastStatePad = this.props.pad.length - 1;
    return (
      <div>
        <h1>{this.props.pad[lastStatePad].drumType}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pad: state.pad,
});


export default connect(mapStateToProps)(ScreenDisplay);
