import React, { Component } from 'react'
import Product from '../Product/Product'
import Axios from 'axios'

export default class Dashboard extends Component {

    handleDeleteProduct(id) {
        Axios.delete(`http://localhost:4000/api/inventory/${id}`)
        .then(res=>{
            this.props.getInventory(res.data)
        }).catch(error => {
            console.log(error)
        })
    }
    render() {

        const mappedInventory = this.props.inventory.map((product, i)=>{
            return(<Product key = {i} product = {product} delete = {this.handleDeleteProduct}/>)
        })
        
      
        return (
            <div>
                {mappedInventory}
                
            </div>
        )
    }
}
