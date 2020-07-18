import React, { Component } from "react";

class Weather extends Component {
    render() {
        return (
            <div>
                <p><b>Ваш город: </b>{this.props.city}</p>
                <p><b>Температура: </b>{this.props.temp} градусов по Цельсию</p>
                <p><b>Погода: </b>{this.props.weather}</p>
            </div>
        )
    }
}

export default Weather;