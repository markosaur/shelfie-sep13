import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    render() {
        let {id, name, price, img} = this.props.product
        console.log(this.props)
        return (
            <div>
                <h3>{name}</h3>
                <h3>{price}</h3>
                <img src={img} alt="product" />
                <button onClick = { () => this.props.delete(id)}>Delete</button>
                <Link to={`/form/${id}`}><button onClick = { () => this.props.edit(this.props.product)}>Edit</button></Link>
                {/* if onclick does not have a function it will invoke immediately and cause heart ache */}
            </div>
        )
    }
}
