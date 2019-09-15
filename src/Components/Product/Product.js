import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {name, price, image_url} = this.props.product
        return (
            <div>
                <h3>{name}</h3>
                <h3>{price}</h3>
                <img src={image_url} alt="product" />
            </div>
        )
    }
}
