import React from 'react';
import Heading from './Heading';
import ReactDOM from 'react-dom';
import Line from './Line';
import Two from './Two';
import Title from './Title';
import Content from './Content';
import Image from './Image';
import Block from './Block';
function App(props) {
  return (
    <div className="App" style={{backgroundColor:"cornsilk"}}>
          <Heading></Heading>
          <Line></Line>
          <Two></Two>
          <Line></Line>
          <Title></Title>
          <Content></Content>
          <Image></Image>
          <Block></Block>
          <Block></Block>
          <Block></Block>
    </div>
  );
}

export default App;
