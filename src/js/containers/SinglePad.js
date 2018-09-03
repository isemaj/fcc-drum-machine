import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNow } from '../actions/index';

class SinglePad extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div> 
				<audio>{this.props.elemId}</audio>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	power: state.power,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	displayNow,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SinglePad);