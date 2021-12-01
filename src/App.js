import React from 'react';
import './App.css';
// import ClassComponent from './ClassComponent';
// import Parent from './Parent';


function App() {

  function getalert(){
    alert("The Button is Clicked")
  }
  function inputalert(){
    alert("The input is Clicked")
  }
  return (
    <div className="App">
      
      {/* <Parent movies='Borle Bhasiya pani me '/> */}
      {/* <ClassComponent/> */}
      <h1>Event Handeling</h1>
      <button onClick={getalert}>Click Me</button><br/>
      <input type="text" onChange={inputalert}/>
      <h1 onMouseOver={getalert}>Hover Event </h1>
    </div>
  );
}

export default App;
