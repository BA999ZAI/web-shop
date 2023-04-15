import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item' style={{display: 'flex', flexDirection: 'column'}}>
            <img src={this.props.item.image} width='180px' />
            <h2 style={{margin: '5px auto'}}>{this.props.item.title}</h2>
            <p style={{margin: '5px auto'}}>{this.props.item.regular_price.value} {this.props.item.regular_price.currency}</p>
            <div className='add-to-cart' style={{margin: '5px auto'}}>+</div>
        </div>
    )
  }
}

export default Item