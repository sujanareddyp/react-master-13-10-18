import React, { Component } from 'react';
import ChildComponent from './Child';
import { Test } from './Test';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "Welcome",
      msg1 : "Message1",
      msg2 : "Message2",
      msg3 : "Message3",
      msg4 : "Message4",
      innerobj: {
        name: "ff"
      }
    }
  }

  handleChildChange = (msgNo, msgValue) => {
    this.setState({
      ...this.state,
      [msgNo] : msgValue
    })
  }
  handleClick = () => {
    this.setState({
      ...this.state,
      text: "Thank you",
      msg3: "bye bye"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <ChildComponent msg={this.state.msg1} bb={this.handleChildChange}/>
        <ChildComponent msg={this.state.msg2} bb={this.handleChildChange} />
        <ChildComponent msg={this.state.msg3} bb={this.handleChildChange} />
        <ChildComponent msg={this.state.msg4} bb={this.handleChildChange} />
        <Test />
        <button onClick={this.handleClick} >Click me</button>
      </div>
    );
  }
}

export default App;
