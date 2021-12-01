
import React,{Component} from "react";
import './App.css';

class Child extends React.Component{
  
  constructor(props){
      super(props)
  }
  
    render(){
        return<div>
        <h2>this is also Child</h2>
        <h1>the recived lanuage from child components {this.props.language}</h1>
      
        </div>
        
    }
}
export default Child