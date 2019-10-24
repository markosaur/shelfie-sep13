import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from '../Header/Header';

export default class Form extends Component {
    constructor(){
        super();
        
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: null,
            edit: false,
            // prod: []
        }
    }

    async componentDidMount (){
        const product = await axios.get(`/api/inventory/${this.props.match.params.id}`)
        console.log(this.props.match.params.id)
        console.log(product.data)
        const prod = product.data[0]
        this.setState({
            name: prod.name,
            price: prod.price,
            img: prod.img,
            id: prod.id,
            edit: true
            
        })
    }

    // async componentDidUpdate (prevProps){
    //     const {name, price, img, id} = this.props.selected
    //     if(prevProps.selected.id !== this.props.selected.id){
    //             this.setState({
    //                 name,
    //                 price,
    //                 img,
    //                 edit: true,
    //                 id
    //             })
    //     }
       
    // }
    handleEdit = ()=>{
        const {name, price, img, id} = this.state
        const selected = {
            name,
            price,
            img,
            id
        }
        axios.put(`/api/inventory/${id}`, selected)
        .then(res=>{
            this.props.getInventory(res.data)
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
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
            img: '',
            edit: false
        })
    }

    handleNewProduct = ()=>{
        const {name, price, img} = this.state
        const newProduct = {
            name,
            price,
            img
        }
        axios.post('api/inventory', newProduct)
        .then(res=>{
            this.props.getInventory(res.data)
        }).catch(error => {
            console.log(error)
        })
    }
    

    
    render() {
        console.log(this.state)
        const edit = this.state.edit;
        let button;

        if(edit) {
            button = <Link to = '/'><button onClick = {this.handleEdit}>Edit</button></Link>
        } else {
            button = <button onClick= {this.handleNewProduct}> Add Inventory </button>
        }

        return (
            <div>
                <Header/>
                <div>
                    <img src={this.state.img}/>
                </div>
                <input placeholder = 'Name' onChange={(event)=>this.handleName(event.target.value)} value={this.state.name}/>
                <input placeholder = 'Price' onChange={(event)=>this.handlePrice(event.target.value)} value={this.state.price}/>
                <input placeholder= 'Image URL' onChange={(event)=> this.handleImg(event.target.value)} value={this.state.img}/>
                <Link to='/'><button onClick={this.handleCancel}>Cancel</button></Link>
                {/* <button onClick={this.handleNewProduct}>Add Inventory</button> */}
                {button}
            </div>
        )
    }

}
