import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {id, name, price, img} = this.props.product
        return (
            <div>
                <h3>{name}</h3>
                <h3>{price}</h3>
                <img src={img} alt="product" />
                <button onClick={this.props.handleDeleteProduct(id)}>Delete</button>
            </div>
        )
    }
}
