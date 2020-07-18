import React, { Component } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styleCard = {
    color: 'black',
    marginTop: '25px',
}

const stylePage = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

class Weather extends Component {
    render() {
        return (
            <Container style={stylePage}>
                <Row>
                    <Col>
                        <Card bg={'light'} style={styleCard} border={'dark'} md={'auto'}>
                            <Card.Header><h1>Погода</h1></Card.Header>
                            <Card.Body>
                                <Card.Title><p><b>Ваш город: </b>{this.props.city}, {this.props.country}</p></Card.Title>
                                <Card.Text color={'white'}>
                                    <p><b>Температура: </b>{Math.round(this.props.temp)}°, ощущается как {Math.round(this.props.feels_like)}°</p>
                                    <p><b>Погода: </b>{this.props.weather_main}, {this.props.weather_description}</p>
                                    <p><b>Ветер: </b>{this.props.wind} м/с</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Weather;