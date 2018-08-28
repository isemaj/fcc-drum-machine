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
  	return (
    <React.Fragment>
      <input type="range" id="drum-volume" step="0.01" min="0" max="1" onChange={this.onVolumeChange} />
    </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  adjustVolume,
}, dispatch);

export default connect(null, mapDispatchToProps)(VolumeRange);
