import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectKit } from '../actions/index';

  const kitOff = {
    border: 'none',
    backgroundColor: 'white',
    width: 80,
    height: 80,
    alignSelf: 'end',
    justifySelf: 'end',
    marginRight: 30,
    cursor: 'grab',
  };

  const kitOnFirstKit = {
    border: 'none',
    backgroundColor: 'red',
    width: 80,
    height: 80,
    alignSelf: 'end',
    justifySelf: 'end',
    marginRight: 30,
    cursor: 'grab',
  };

  const kitOnSecondKit = {
    border: 'none',
    backgroundColor: 'blue',
    width: 80,
    height: 80,
    alignSelf: 'end',
    justifySelf: 'end',
    marginRight: 30,
    cursor: 'grab',
  };

class Kit extends Component {
  constructor(props) {
    super(props);
  }



  selectStyle = () => {
    if (this.props.power.powerStatus) {
      if (this.props.kit.kitStatus) {
        return kitOnFirstKit
      } else {
        return kitOnSecondKit
      }
    }  
      return kitOff
  };

  validateCheck = () => {
  this.props.selectKit();
  };

  render() {
    return (
      <React.Fragment>
      <button style={this.selectStyle()} onClick={this.validateCheck}></button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  power: state.power,
  kit: state.kit,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectKit,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Kit);
