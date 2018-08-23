import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  pressQ,
  pressW,
  pressE,
  pressA,
  pressS,
  pressD,
  pressZ,
  pressX,
  pressC,
} from '../actions/index';

const styles = {
  height: 30,
  width: 30,
  border: '1px solid black',
};

const play = (key) => {
  if(document.readyState === 'complete') {
    console.log(key);
    const sound = document.getElementById(key);
    sound.play();
  }
};


class DrumPad extends Component {
  trigger(index, key) {
  	switch (index) {
      case 0:
        play(key);
  			return this.props.pressQ;
  		case 1:
        play(key);
  			return this.props.pressW;
  		case 2:
  			return this.props.pressE;
  		case 3:
  			return this.props.pressA;
  		case 4:
  			return this.props.pressS;
  		case 5:
  			return this.props.pressD;
  		case 6:
  			return this.props.pressZ;
  		case 7:
  			return this.props.pressX;
  		case 8:
  			return this.props.pressC;
  		default:
  	}
  }

  onePad() {
    return this.props.pad.map((elem, index) => (
      <div
        key={elem.id}
        style={styles}
        className="drum-pad"
        onClick={this.trigger(index, elem.keyLetter)}
      >
        {elem.keyLetter}
        <audio
          className="clip"
          id={elem.keyLetter}
          src={elem.url}
        />
      </div>
    ));
  }


  render() {
    return (
      <div>
        {this.onePad()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  pad: state.pad,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  pressQ,
  pressW,
  pressE,
  pressA,
  pressS,
  pressD,
  pressZ,
  pressX,
  pressC,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
