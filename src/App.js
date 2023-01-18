import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "ba5e161b1bac2b14f71ee5c17ea15e9e";

class App extends React.Component {

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }


  render () {
    return (
      <div>
      <Info />
      <Form weatherMethod={this.gettingWeather} />
      <Weather />
      </div>
    )
  }
}

export default App;