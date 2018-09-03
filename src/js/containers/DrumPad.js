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

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareStyle: inactivePad 
    }
    this.activate = this.activate.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress);
  }

  keyPress = (e) => {
    this.playNow(e.key.toUpperCase());
  }

  activate = () => {
    if (this.props.power.powerStatus) {
      this.setState({
        squareStyle: activePad
      });
    }
  }

  playNow = (key, id) => {
    const sound = document.getElementById(key);
    const keyIndex = this.props.kit.drumKit.findIndex(elem => elem.keyTrigger === key)
    if(keyIndex === -1) {
      return
    } else { 
      const keyId = this.props.kit.drumKit[keyIndex].id;
      this.props.displayNow(keyId);
      sound.volume = this.props.volume.currentVolume;
      sound.play();
      this.activate();
    }
  }

  render() {
    const padSet = this.props.kit.drumKit.map((elem, index) => (
        <div key={elem.id} style={this.state.squareStyle} className="audio-pad" onClick={() => this.playNow(elem.keyTrigger, elem.id)}>
            {elem.keyTrigger}
            <audio className="clip" id={elem.keyTrigger} src={this.props.power.powerStatus ? elem.url : '#'}/>
        </div>
      ));
    return (
      <React.Fragment>
        {padSet} 
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  kit: state.kit,
  power: state.power, 
  volume: state.volume,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  displayNow,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
