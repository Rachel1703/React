import React from 'react';
import C from './c.PNG';
function Square(props) {

    const child ={
        backgroundColor:"#B20F1D",
		color:"white",
		height:"20px",
		width:"60px",
		marginTop:"-7px",
		position:"realtive"
    }

    const parent = {
        marginTop:"25px",
	float:"left",
	height:"30%",
	width:"32%",
    backgroundColor:"#D1CAC5",
    marginLeft:"10px"
	
    }
    return (
    <div style={{backgroundColor:"cornsilk"}}>
    <div style={parent}>
        <div style={child}>
            <i>25 12 34</i>
        </div>
        <img src={C} style={{width:"30px",height:"30px",align:"left"}}></img>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    </div>
    );
  }
  
  export default Square;