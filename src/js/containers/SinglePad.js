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
  boxShadow: 'inset 0px 0px 34px var(--box-inner-shadow-power-off-inactive-hover)'
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

const inactivePowerOnHover = {
  height: 90, 
  width: 90, 
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'var(--text-power-on-inactive-hover)',
  boxShadow: 'inset 0px 0px 47px var(--box-inner-shadow-power-on-inactive-hover), 0px 0px 7px var(--box-outer-shadow-power-on)',
  transition: 'box-shadow .20s linear'
};

class SinglePad extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      currentStyle: inactivePowerOff
    }
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

  activate = () => {
  	if (this.props.power.powerStatus) {
  		this.state.currentStyle == inactivePowerOff ? 
  			this.setState({
  				currentStyle: activeBeat 
  			})
  			:
  			this.setState({
  				currentStyle: inactivePowerOff 
  			})
  	}
  }

  hoverIn = () => {
    this.setState({
      currentStyle: inactivePowerOnHover
    })
  }

  hoverOut = () => {
    this.setState({
      currentStyle: inactivePowerOff
    })
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

  render() {
  	const source = this.props.source;
  	const trigger =  this.props.elemKey;
  	const drumpadId = this.props.drumId;
    return (
      <div style={this.state.currentStyle} onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut} onClick={() => this.playNow()}>
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
