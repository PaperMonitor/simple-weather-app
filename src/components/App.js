import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

//API Key
const APIKEY = '3e959ffbfde12c0eadf77551db611580';


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
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  // handleCitySubmit = (e) => {
  //   e.preventDefault();
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`

  //   fetch(API)
  //   .then(response => {
  //     if(response.ok) {
  //       return response
  //     }
  //     throw Error("Sorry, couldn't make it")
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     const time = new Date().toLocaleString()
  //     this.setState(state => ({
  //       err: false,
  //       date: time,
  //       city: state.value,
  //       sunrise: data.sys.sunrise,
  //       sunset: data.sys.sunset,
  //       temp: data.main.temp,
  //       pressure: data.main.pressure,
  //       wind: data.wind.speed,
  //     }))
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     this.setState(prevState => ({
  //       err: true,
  //       city: prevState.value
  //     }))
  //   })
  // }

  componentDidUpdate(prevProps, prevState){

    if(this.state.value.length === 0) return
    if(prevState.value !== this.state.value) {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Sorry, couldn't make it")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(state => ({
        err: false,
        date: time,
        city: state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
      }))
    })
    .catch(err => {
      console.log(err);
      this.setState(prevState => ({
        err: true,
        city: prevState.value
      }))
    })
  }
    }
  
  


  render (){
  return (
    <div className="App">
      <Form 
      value={this.state.value} 
      change={this.handleInputChange}
      />
      <Result weather={this.state} />
    </div>
  );
  }
}

export default App;
