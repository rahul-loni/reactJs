
import React,{Component} from "react";
import './App.css';

class ClassComponent extends React.Component{
  constructor(){
    super();
    this.state={
      'player':'ronaldo ',
      
      
    }
    this.state={'name':'Rahul'}
    this.state={'country':'Japan'}
  }
  
  
    render(){
        return<div>
        <h1>This is {this.state.player}</h1>
        <h2>this is also {this.state.player}</h2>
        <h2>this is also {this.state.name}</h2>
        <h1>this is also {this.state.country}</h1>
        </div>
        
    }
}
export default ClassComponent