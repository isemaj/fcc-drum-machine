import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNow } from '../actions/index';

const inactivePowerOff = {
  height: 90, 
  width: 90, 
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'var(--text-power-off-inactive)',
  boxShadow: 'inset 0px 0px 14px var(--box-inner-shadow-power-off-inactive-hover)'
};

const inactivePowerOffHover = {
  height: 90, 
  width: 90, 
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'var(--text-power-off-hover)',
  boxShadow: 'inset 0px 0px 29px var(--box-inner-shadow-power-off-inactive-hover)'
};

const inactivePowerOn = {
  height: 90, 
  width: 90, 
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'var(--text-power-on-inactive-hover)',
  boxShadow: 'inset 0px 0px 14px var(--box-inner-shadow-power-on-inactive-beat), 0px 0px 7px var(--box-outer-shadow-power-on)',
  animation: 'flick 1s infinite alternate'
};

const inactivePowerOnHover = {
  height: 90, 
  width: 90, 
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'var(--text-power-on-inactive-hover)',
  boxShadow: 'inset 0px 0px 27px var(--box-inner-shadow-power-on-inactive-hover), 0px 0px 7px var(--box-outer-shadow-power-on)',
  animation: 'flick 1s infinite alternate'
};

const activeBeat = {
  height: 90, 
  width: 90, 
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'var(--text-power-on-beat)',
  boxShadow: 'inset 0px 0px 14px var(--box-inner-shadow-power-on-inactive-beat), 0px 0px 25px var(--box-outer-shadow-power-on)'
};






const inactivePad = {
  height: 90,
  width: 90,
  color: 'var(--text-inactive-and-hover)',
  borderRadius: 5,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'flick 1s infinite alternate'
};

const activePad = {
  height: 90,
  width: 90,
  color: 'var(--text-active)',
  borderRadius: 5,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 25px var(--shadow-box), inset 0px 0px 14px var(--shadow-box)',
};

class SinglePad extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	document.addEventListener('keydown', this.keyPress);
  }

  componentWillUnmount() {
  	document.removeEventListener('keydown', this.keyPress);
  }

  keyPress = (e) => {
  	if (e.keyCode === this.props.keyCode) {
  	this.playNow(e.key.toUpperCase());
  	}
  }

  // activate = () => {
  // 	if (this.props.power.powerStatus) {
  // 		this.state.currentStyle == activePad ? 
  // 			this.setState({
  // 				currentStyle: inactivePad
  // 			})
  // 			:
  // 			this.setState({
  // 				currentStyle: activePad
  // 			})
  // 	}
  // }

  hoverIn = () => {
    this.setStyle();
  }

  hoverOut = () => {
    this.setStyle();
  }

  playNow = () => {
  	const sound = document.getElementById(this.props.elemKey);
  	sound.currentTime = 0;
  	sound.volume = this.props.volume.currentVolume;
  	sound.play();
  	this.activate();
  	setTimeout(() => this.activate(), 100);
  	this.props.displayNow(this.props.drumId);
  }

  setStyle = (event) => {
    if (this.props.power.powerStatus) {
      return inactivePowerOn 
    } else {
      return inactivePowerOff
    }
  }

  render() {
  	const source = this.props.source;
  	const trigger =  this.props.elemKey;
  	const drumpadId = this.props.drumId;
    return (
      <div style={this.setStyle()} onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut} onClick={() => this.playNow()}>
        {trigger} 
        <audio id={trigger} src={this.props.power.powerStatus ? source : '#'} />
      </div> 
    );
  }
}

const mapStateToProps = state => ({
  power: state.power,
  volume: state.volume,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  displayNow,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SinglePad);
