import React, { Component } from 'react';

class ItemLista extends Component {

  	changeCompleted = (event) => {
  		 const item = {
		      id: this.props.item.id,
		      completed: event.target.checked,
		      texto: this.props.item.texto
		    }

  		this.props.changeCompleted(item)
	}

	deleteItem = (event) => {
		this.props.deleteItem(this.props.item.id)
	}

  render() {
  	
  	const styleSelected = {
  		"text-decoration": "line-through"
  	}

    return (
      <div class="row" style={this.props.item.completed == true ? styleSelected: null}>
      	  <button onClick={this.deleteItem}>Delete</button>
          {this.props.item.texto} 
          <input ref={this.props.item.id} onChange={this.changeCompleted} type="checkbox"/>
      </div>
    );
  }
}

export default ItemLista;
