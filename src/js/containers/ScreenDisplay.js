import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ScreenDisplay extends Component {
  render() {
  	
  	const display = this.props.power.powerStatus ? <p>{this.props.display.displayKey}</p> : <p>Turn On</p>; 
  	return (
      <div id="display-item">
      	{display}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  power: state.power,
  display: state.display,
  kit: state.kit,
});


export default connect(mapStateToProps)(ScreenDisplay);
