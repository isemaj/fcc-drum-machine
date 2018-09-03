import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNow } from '../actions/index';

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
    this.state = {
    	currentStyle: inactivePad 
    }
  }

  componentDidMount() {
  	document.addEventListener('keydown', this.keyPress);
  	console.log(this.props.drumId);
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
  		this.state.currentStyle == activePad ? 
  			this.setState({
  				currentStyle: inactivePad
  			})
  			:
  			this.setState({
  				currentStyle: activePad
  			})
  	}
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
      <div style={this.state.currentStyle} onClick={() => this.playNow()}>
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
