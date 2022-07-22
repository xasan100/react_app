import React, { Component } from 'react'
import Test from './test';

export default class App extends Component {
constructor(props){
super(props)
this.state={
number1: '',
  number2: '',
  selected: ''  ,
  resalt: ''
}
}
  render() 
  {
    const {number1, number2,selected,resalt,}=this.state;
   
    return (
      <div>
        <br />
        <input type="text" onChange={(e) => this.setState({ number1: e.target.value }) }/> 
        <select name="" id=""
          onChange={(e) => this.setState({    selected: e.target.value })}>
          <option selected value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" onChange={(e) => this.setState({ number2: e.target.value })} />
        <button onClick={() => (this.setState({ resalt: 
        (selected === '+' && +number1 + +number2 )||
        ( selected === '-' && -number1 - +number2) ||
        (selected === '*' && +number1 * +number2) ||
        (selected === '/' && +number1 / +number2) 
      }))}>=</button>
        <h1>javobi { resalt}</h1>
    <Test/>
      </div>
    )
  }
}
