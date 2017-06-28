import React, { Component } from 'react';

class Adjuntador extends Component {

	handleKeyPress = (event) => {
	  if(event.key === 'Enter'){
	    this.props.nuevoItem(event.target.value)
	    this.refs.inputText.value = ""
	  }
	}

	render() {
		return (
			<div class="row">
				<input type="text" ref="inputText" onKeyPress={this.handleKeyPress} />
			</div>
		);
	}
}

export default Adjuntador;
