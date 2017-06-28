import React, { Component } from 'react'
import { connect } from 'react-redux'

class Layout extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        LAYOUT
      </div>
    );
  }
}

export default connect( (store) => {
  items: store
}, {})(Layout);
