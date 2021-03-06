import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { adjustVolume } from '../actions/index';

class VolumeRange extends Component {
  constructor(props) {
    super(props);
    this.onVolumeChange = this.onVolumeChange.bind(this);
  }

  onVolumeChange(e) {
  	this.props.adjustVolume(e.target.value);
  }

  render() {
    console.log(document.getElementsByClassName('volume-range')[0])
  	return (
    <React.Fragment>
      <input className="volume-range" type="range" id="drum-volume" value={this.props.volume.currentVolume} step="0.01" min="0" max="1" onChange={this.onVolumeChange} />
    </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  volume: state.volume,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  adjustVolume,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VolumeRange);
