import React, { Component } from 'react';
import './App.css';
import Lista from './Lista'
import Adjuntador from './Adjuntador'

class App extends Component {

  constructor() {
    super();
    this.state = {
      items : [ ],
      message: ""
    }
  }

  addItem(text) {

    const item = {
      id: +new Date(),
      completed: false,
      texto: text
    };


    if (this.validateItem(item)) {
          this.setState({
            message: "",
            items: [...this.state.items, item],
          })
    }

  }

  updateItem(elemento) {
      
        this.setState({
          message: "",
          items: this.state.items.map(item => (item.id === elemento.id ? { ...elemento } : item))
        })
      
  }


  deleteItem(idItem) {
    const itemToDelete = this.state.items.find( (elemento) => { 
          return idItem == elemento.id
      })

    const index = this.state.items.indexOf(itemToDelete)

    this.state.items.splice(index, 1);

    this.setState({
        items: [...this.state.items]
      })
  }

  validateItem(item) {
    if (item.texto == "") {

      this.setState({
        message: "No puede agregar un item vacío"
      })

      return false;
    }
    
    const aux = this.state.items.filter( (elemento) => {
      return elemento.texto == item.texto
    }).length

    if (aux > 0) {
      this.setState({
        message: "El item ya existe"
      })

      return false;        
    }
    

    return true
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.message}</p>
        <Adjuntador nuevoItem={this.addItem.bind(this)}/>
        <Lista changeCompleted={this.updateItem.bind(this)} deleteItem={this.deleteItem.bind(this)} items={this.state.items}/>
      </div>
    );
  }
}

export default App;
