import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { turnOn, turnOff } from '../actions/index';

const SwitchButton = props => (
  <React.Fragment>
    <button className="switch-selector" type="submit" onClick={!props.power.powerStatus ? props.turnOn : props.turnOff}>
      {props.power.powerStatus
	    ? <FontAwesomeIcon icon="lightbulb" size="3x" color="white" />
      	: <FontAwesomeIcon icon="lightbulb" size="3x" color="yellow" />
      }
    </button>
  </React.Fragment>
);

SwitchButton.propTypes = {
  turnOn: PropTypes.func.isRequired,
  turnOff: PropTypes.func.isRequired,
  power: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  power: state.power,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  turnOn,
  turnOff,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
