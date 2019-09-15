import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }
    
    handleName = (value)=>{
        this.setState({
            name: value
        })
    }

    handlePrice = (value)=>{
        this.setState({
            price: value
        })
    }
    
    handleImg = (value)=>{
        this.setState({
            img: value
        })
    }
    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
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
                <button>Add Inventory</button>
            </div>
        )
    }

}
