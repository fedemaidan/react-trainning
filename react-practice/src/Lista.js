import React, { Component } from 'react';
import ItemLista from "./ItemLista";

class Lista extends Component {


	changeCompleted = (value) => {
		this.props.changeCompleted(value)
	}

	deleteItem = (value) => {
		this.props.deleteItem(value)
	}

  render() {
    const items = this.props.items.map( (item, i) => { 
    	return <ItemLista item={item} deleteItem={this.deleteItem} changeCompleted={this.changeCompleted}/> 
    }) ;
    
    return (
      <div class="row">
          {items}
      </div>
    );
  }
}

export default Lista;
