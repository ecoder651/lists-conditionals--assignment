import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import Welcome from './Welcome/Welcome'



class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      string:"",
      aligning:"left",
      isShow: true
    };
    
    console.log("[App.js] constructor is called!");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps is called!", props);
    return state;
  }
  
  componentWillMount()
  {
    console.log("[App.js] componentWillMount is called!");
  
  }

  componentDidMount()
  {
    
    setTimeout(() => {
      this.setState({
        aligning : "right"
      })
    }, 2000);

    console.log("[App.js] componentDidMount is called!");
  }

  shouldComponentUpdate()
  {
    console.log("[App.js] shouldComponentUpdate is called!");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate is called!");
    console.log(prevState.aligning);
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate is called!");
    console.log(this.state.aligning);
  }

  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount is called");
  }

  showInputLength = (event) =>{
    this.setState({
      string : event.target.value
      //chars : event.target.value.split('')
    }
    )
  }

  deleteCharComponentHandler = (index) =>{

    let newString = this.state.string.slice(0,index) + this.state.string.slice(index+1, this.state.string.length);
    this.setState({
      string : newString
    })
  }

  deleteAll = () =>{
    this.setState({
      isShow: false
    })
  }
  render() {

    console.log("[App.js] render is called!");
    
    let headingText = null
    if(this.state.isShow)
    {
        headingText = <h2 align = {this.state.aligning}>Testing Text!</h2>
    }

    let charsArray = null
    if (this.state.string.length > 0){
      charsArray = (
        <div>
          {this.state.string.split('').map((char, index) => {
            return <CharComponent
            val = {char}
            key = {index}
            click = { () => this.deleteCharComponentHandler(index)}
            />
          })}
        </div>
      );
    }
    

    return (
      <div className="App">
        <Welcome></Welcome>
        {headingText}
        <button onClick ={ () => this.deleteAll()}>Button</button>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input 
        type = "text"
        onChange = {this.showInputLength}
        value = {this.state.string}
        />
        <p>{this.state.string}</p>
        <ValidationComponent
        textSize = {this.state.string.length} 
        />
        {charsArray}
      </div>
      
    );
  }
}

export default App;
