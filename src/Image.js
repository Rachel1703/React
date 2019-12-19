import React from 'react';
import Home from './home.png';
function Image(props) {
    const img = {
            backgroundColor:"black",
            width:"55%",
            height:"40%",
            marginLeft:"50px",
            float:"left"
            }
    
    return (
        <div style={img}>
            <img src={Home}></img>
        </div>
    );
  }
  
  export default Image;