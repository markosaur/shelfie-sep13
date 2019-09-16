import React, { Component } from 'react'
import Axios from 'axios';

export default class Form extends Component {
    constructor(){
        super();
        
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }
    
    handleName = (name)=>{
        this.setState({
            name: name
        })
    }

    handlePrice = (price)=>{
        this.setState({
            price: price
        })
    }
    
    handleImg = (img)=>{
        this.setState({
            img: img
        })
    }
    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    handleNewProduct = ()=>{
        const {name, price, img} = this.state
        const newProduct = {
            name,
            price,
            img
        }
        Axios.post('api/inventory', newProduct)
        .then(res=>{
            this.props.getInventory(res.data)
        }).catch(error => {
            console.log(error)
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <input placeholder = 'Name' onChange={(event)=>this.handleName(event.target.value)} value={this.state.name}/>
                <input placeholder = 'Price' onChange={(event)=>this.handlePrice(event.target.value)} value={this.state.price}/>
                <input placeholder= 'Image URL' onChange={(event)=> this.handleImg(event.target.value)} value={this.state.img}/>
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleNewProduct}>Add Inventory</button>
            </div>
        )
    }

}
