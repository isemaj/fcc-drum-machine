import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNow } from '../actions/index';

const styles = {
  height: 90,
  width: 90,
  borderRadius: 5,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class DrumPad extends Component {
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
    this.playNow(e.key.toUpperCase());
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
  }
  }

  render() {
    const padSet = this.props.power.powerStatus ?
      this.props.kit.drumKit.map((elem, index) => (
      <div key={elem.id} style={styles} onClick={() => this.playNow(elem.keyTrigger, elem.id)}>
        {elem.keyTrigger}
        <audio className="clip" id={elem.keyTrigger} src={elem.url} />
      </div>
    ))
    :
      this.props.kit.drumKit.map((elem, index) => (
      <div key={elem.id} style={styles} onClick={() => this.playNow(elem.keyTrigger, elem.id)}>
        {elem.keyTrigger}
        <audio className="clip" id={elem.keyTrigger} src='#' />
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
