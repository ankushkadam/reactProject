import React, { Component } from 'react';
import './style.css'
import AllPerson from './component/AllPerson'

class App extends Component {
  constructor(){
    super();
    
    this.state={
      message:'Welcome to Avatar World'
    }
  }
  changeMessage(){
    this.setState({
      message:'Thank you for Subscribe Us'
    })
  }
  render(){
    return (
      <div className="container">
        <h1 className="tc">{this.state.message}</h1>
        <AllPerson />
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
  
}

export default App;