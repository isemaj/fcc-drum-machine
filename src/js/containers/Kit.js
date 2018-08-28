import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectKit } from '../actions/index';

class Kit extends Component {
  constructor(props) {
    super(props);
    this.validateCheck = this.validateCheck.bind(this);
  }

  validateCheck() {
  	const click = document.getElementById('kit-selector');
  	click.addEventListener('click', function () {
  		console.log(this.checked);
  		this.props.selectKit(this.checked);
  	// 	if (this.checked) {
  	// 		this.props.selectKit(this.checked);
  	// 	} else {
  	// 		this.props.selectKit(this.checked);
  	// 	}
    });
  }

  render() {
    return (
      <React.Fragment>
        <input id="kit-selector" type="checkbox" onChange={this.validateCheck} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectKit,
}, dispatch);

export default connect(null, mapDispatchToProps)(Kit);
