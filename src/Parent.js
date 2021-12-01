
import React,{Component} from "react";
import Child from './Child'
import './App.css';

class Parent extends React.Component{
 
    render(){
        return<div>
        <h2>recived from APP.js{this.props.movies}</h2>
        <Child language='JavaScripts'/>
        </div>
        
    }
}
export default Parent