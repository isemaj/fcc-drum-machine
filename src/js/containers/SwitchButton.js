import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { turnOn, turnOff } from '../actions/index';

const SwitchButton = props => (
  <React.Fragment>
    <button className='switch-selector' type="submit" onClick={!props.power.powerStatus ? props.turnOn : props.turnOff}>{props.power.powerStatus ? 'Switch Off' : 'Switch On'}</button>
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
