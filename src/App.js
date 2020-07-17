import React from "react";

import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "a2b6fcd38dafb5cebe5e38cc8b1bf4a0";


class App extends React.Component {

  getWeather = async () => {
    let city = "Manchester";
    let country = "UK";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    const data = await api_call.json();

    console.log(data);
  }

  render(){
    return(
      <div> 
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;