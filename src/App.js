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
      <button onClick={getalert} style={{color:'red',background:'green',margin:'20px',fontSize:'50px',borderRadius:'10px',fontWeight:'bold'}}>Click Me</button><br/>
      <input type="text" onChange={inputalert} style={{fontSize:'30px'}}/>
      {/* <h1 onMouseOver={getalert}>Hover Event </h1> */}
      <h2 className='fh1'>Hello Rahul Kumar</h2>
    </div>
  );
}

export default App;
