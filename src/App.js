import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import routes from './routes'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      selectedProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
  }


  componentDidMount(){
    console.log('attempting to mount')
    this.getInventory();
  }

  getInventory(){
    axios.get('/api/inventory').then((response)=>{
      console.log(response)
      this.setState({inventory: response.data})
    })
  }

  handleEditProduct = (prod) => {
    this.setState({
      selectedProduct: prod
    })
  }


  render() {
    console.log(this.state);
    
    return (
    <div>
      <Header/>
      <Dashboard inventory = {this.state.inventory} getInventory = {this.getInventory} edit = {this.handleEditProduct} selected = {this.state.selectedProduct} />
    </div>
    ) 
  };
}


