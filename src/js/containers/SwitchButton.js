import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { turnOn, turnOff } from '../actions/index';

class SwitchButton extends Component {
  render() {
    const switchButton = !this.props.power.powerStatus ? this.props.turnOn : this.props.turnOff;
    const switchName = this.props.power.powerStatus ? 'Switch Off' : 'Switch On';
    return (
      <div>
        <button type="submit" onClick={switchButton}>{switchName}</button>
      </div>
    );
  }
}

SwitchButton.propTypes = {
  turnOn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  power: state.power,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  turnOn,
  turnOff,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
