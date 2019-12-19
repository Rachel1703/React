import React from 'react';

function Content(props) {

    const parent = {height:"40%",
		width:"35%",
        float:"left"}
    
    const child = {
        
            backgroundColor:"#B20F1D",
            color:"white",
            height:"20px",
            width:"60px",
            marginTop:"-7px",
            position:"realtive"
            
            }
    
		
		
    return (
        <div style={parent}>
        <div style={child}>
            <i>Today 01</i>
        </div>
    <p>
    Nemo enim ipsam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, quui dolorem eum fugiat, quo voluptas nulla pariatur?”</p>
    </div>
    );
}
  
  export default Content;