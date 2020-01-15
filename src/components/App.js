import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunste: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=3e959ffbfde12c0eadf77551db611580&units=metric`

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Sorry, couldn't make it")
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render (){
  return (
    <div className="App">
      <Form 
      value={this.state.value} 
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
      />
      <Result />
    </div>
  );
  }
}

export default App;
