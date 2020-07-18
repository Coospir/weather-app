import React, { Component } from "react";

class Weather extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <p><b>Ваш город: </b>{this.props.city}, {this.props.country}</p>
                <p><b>Температура: </b>{Math.round(this.props.temp)}°, ощущается как {Math.round(this.props.feels_like)}°</p>
                <p><b>Погода: </b>{this.props.weather_main}, {this.props.weather_description}</p>
            </div>
        )
    }
}

export default Weather;