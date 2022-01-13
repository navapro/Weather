import React from "react";

import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "2bbf79e4e4e74a6ada20f8c6d48e52bd";


class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }
  
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
   
    if (data.name && data.sys.country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else{

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a city and country."
      });
    }
  }

  render(){
    return(
      <div>
      <div className="wrapper">
        <div className="main">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
                <div className="col-xs-7 form-container">
                    <Form getWeather = {this.getWeather}/>
                    <Weather
                      temperature = {this.state.temperature}
                      city = {this.state.city}
                      country = {this.state.country}
                      humidity = {this.state.humidity}
                      description = {this.state.description}
                      error = {this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

