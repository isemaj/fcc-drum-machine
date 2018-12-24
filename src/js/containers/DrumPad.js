import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNow } from '../actions/index';
import SinglePad from './SinglePad';

class DrumPad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const padSet = this.props.kit.drumKit.map((elem, index, currarr) => (
      <SinglePad keyCode={elem.keyCode} key={elem.id} drumId={currarr[index].id} elemKey={elem.keyTrigger} source={elem.url} />
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  displayNow,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
