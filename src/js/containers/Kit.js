import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectKit } from '../actions/index';
  
  const outerCircle = {
    border: 'none',
    backgroundColor: 'var(--circ-back)',
    width: 89,
    height: 89,
    alignSelf: 'end',
    justifySelf: 'end',
    marginRight: 30,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    dropShadow: 'inset 0px 2px 8px var(--circ-back-shadow)',
    display: 'flex',
  }

  const circMidOff = {
    border: 'none',
    backgroundColor: 'white',
    width: 73,
    height: 73,
    cursor: 'grab',
    borderRadius: '50%',
    padding: 0,
    backgroundColor: 'var(--dark-purple)',
    boxShadow: 'inset 0px 0.5px 2px var(--circ-front-shadow), 0px 2px 3px var(--circ-front-shadow-dark)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const circMidOn = {
    border: 'none',
    backgroundColor: 'white',
    width: 73,
    height: 73,
    cursor: 'grab',
    borderRadius: '50%',
    padding: 0,
    backgroundColor: 'var(--dark-purple)',
    boxShadow: '0px 5px 4px var(--circ-front-shadow-dark)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const kitOff = {
    border: 'none',
    border: '6px solid var(--circ-back)',
    outline: 'none',
    width: 34,
    height: 34,
    cursor: 'grab',
    borderRadius: '50%',
    display: 'flex',
    boxShadow: 'inset 0px 4px 8px var(--outline-border-inner-shadow)',
  };

  const kitOnFirstKit = {
    border: 'none',
    border: '6px solid #E35B00',
    outline: 'none',
    width: 34,
    height: 34,
    cursor: 'grab',
    borderRadius: '50%',
    display: 'flex',
    boxShadow: 'inset 0px 4px 8px var(--outline-border-inner-shadow)',
  };

  const kitOnSecondKit = {
    border: 'none',
    border: '6px solid #40AEFD',
    outline: 'none',
    width: 34,
    height: 34,
    cursor: 'grab',
    borderRadius: '50%',
    display: 'flex',
    boxShadow: 'inset 0px 4px 8px var(--outline-border-inner-shadow)',
  };

class Kit extends Component {
  constructor(props) {
    super(props);
  }

  selectStyle = () => {
    if (this.props.power.powerStatus) {
     return circMidOn 
    }
    return circMidOff
  }

  validateCheck = () => {
  this.props.selectKit();
  };

  render() {
    return (
      <React.Fragment>
        <div style={outerCircle}> 
          <button style={this.selectStyle()} onClick={this.validateCheck}>
            <div style={this.props.power.powerStatus ? this.props.kit.kitStatus ? kitOnFirstKit : kitOnSecondKit : kitOff} />
          </button>
        </div>
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
