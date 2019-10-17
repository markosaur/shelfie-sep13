import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {


    handleDeleteProduct= (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(res=>{
            this.props.getInventory()
            //getInventory does not need to be invoked
        }).catch(error => {
            console.log(error)
        })
    }

    
    render() {

        const mappedInventory = this.props.inventory.map((product, i)=>{
            return(<Product key = {i} product = {product} delete = {this.handleDeleteProduct} edit = {this.props.edit} />)
        })
        
      
        return (
            <div>
                {mappedInventory}
                
            </div>
        )
    }
}
