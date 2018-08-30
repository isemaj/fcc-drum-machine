import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
  height: 30,
  width: 30,
  border: '1px solid black',
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

  playNow = (id) => {
    const sound = document.getElementById(id);
    console.log(this.props.volume.currentVolume);
    sound.volume = this.props.volume.currentVolume;
    sound.play();
  }

  render() {
    const padSet = this.props.power.powerStatus ?
      this.props.kit.drumKit.map((elem, index) => (
      <div key={elem.id} style={styles} onClick={() => this.playNow(elem.keyTrigger)}>
        {elem.keyTrigger}
        <audio className="clip" id={elem.keyTrigger} src={elem.url} />
      </div>
    ))
    :
      this.props.kit.drumKit.map((elem, index) => (
      <div key={elem.id} style={styles} onClick={() => this.playNow(elem.keyTrigger)}>
        {elem.keyTrigger}
        <audio className="clip" id={elem.keyTrigger} src='#' />
      </div>
    ));
    return (
      <div>
        {padSet} 
      </div>
    );
  }
}


const mapStateToProps = state => ({
  kit: state.kit,
  power: state.power, 
  volume: state.volume,
});

export default connect(mapStateToProps, null)(DrumPad);
