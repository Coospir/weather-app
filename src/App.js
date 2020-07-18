import React, { Component }  from 'react';
import './App.css';
//import Info from "./components/info";
import Weather from "./components/weather";

const API_KEY = "12195ce8c347a4d8940272852b1d3634";



class App extends Component {

    state = {
        temp: undefined,
        feels_like: undefined,
        city: undefined,
        weather_description: undefined,
        weather_main: undefined,
        wind: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }


  gettingWeather = async() => {
      const apiURL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=${API_KEY}`);
      const data = await apiURL.json();
      console.log(data);
      this.setState({
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          weather_description: data.weather[0].description,
          weather_main: data.weather[0].main,
          wind: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          error: ""
      });
  };


  render() {
    return (
        <div>
            <Weather weatherGetter={this.gettingWeather()}
            country={this.state.country}
            city={this.state.city}
            temp={this.state.temp}
            weather_description={this.state.weather_description}
            weather_main={this.state.weather_main}
            wind={this.state.wind}
            feels_like={this.state.feels_like}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            error={this.state.error}
            />
        </div>
    )
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
