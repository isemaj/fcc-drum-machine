import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { turnOn, turnOff } from '../actions/index';


const powerOnStyle = {
  backgroundColor: 'var(--circ-back)',
  outline: 'none',
  border: 'none',
  width: 80,
  height: 87,
  borderRadius: '50%',
  justifySelf: 'start',
  marginLeft: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'inset 0px 2px 8px var(--circ-back-shadow)',
};

const powerOffStyle = {
  backgroundColor: 'var(--circ-back)',
  outline: 'none',
  border: 'none',
  width: 80,
  height: 87,
  borderRadius: '50%',
  justifySelf: 'start',
  marginLeft: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'inset 0px 2px 8px var(--circ-back-shadow)',
};

const circOn = {
  backgroundColor: 'var(--circ-front)',
  outline: 'none',
  width: 73,
  height: 73,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 5px 4px var(--circ-front-shadow-dark)',
};

const circOff = {
  backgroundColor: 'var(--circ-front)',
  outline: 'none',
  width: 73,
  height: 73,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'inset 0px 0.5px 2px var(--circ-front-shadow), 0px 2px 3px var(--circ-front-shadow-dark)',
};

const SwitchButton = props => (
  <React.Fragment>
    <button style={props.power.powerStatus ? powerOnStyle : powerOffStyle} type="submit" onClick={!props.power.powerStatus ? props.turnOn : props.turnOff}>
      <div style={props.power.powerStatus ? circOn : circOff}>
        {props.power.powerStatus
	    ? <FontAwesomeIcon icon="power-off" size="3x" color="#FF0492" />
      	: <FontAwesomeIcon icon="power-off" size="3x" color="#240B2D" />
      }
      </div>
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
