import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
constructor(props){
    super(props)
}

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
        console.log(this.props)
        const mappedInventory = this.props.inventory.map((product, i)=>{
            return(<Product key = {i} product = {product} delete = {this.handleDeleteProduct} edit = {this.props.edit} selected = {this.props.selected}/>)
        })
        
      
        return (
            <div>
                {mappedInventory}
                
            </div>
        )
    }
}
