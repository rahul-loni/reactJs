
import React,{Component} from "react";
import './App.css';

class ClassComponent extends React.Component{
  constructor(){
    super();
    this.state={
      name:'rahul'
  }
}
  chamename=()=>{
    this.setState({name:'kumar'})
  }
  
  
    render(){
        return<div>
        <h2>this is also {this.state.name}</h2>
        <button onClick={this.chamename}> change name </button>
        </div>
        
    }
}
export default ClassComponent