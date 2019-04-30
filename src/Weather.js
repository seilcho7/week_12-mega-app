import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            weather: [],
            error: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Weather</h2>
                <input type="number" onChange={(e) => {this._setZip(e.target.value)}} placeholder="Weather by zip code"></input>
                <ul>
                    {
                        this.state.weather.main ? [<li key={'city'}>City: {this.state.weather.name}</li>, <li key={'temp'}>Temp: {Math.floor(this.state.weather.main.temp - 273) * 9/5 + 32}</li>, <li key={'weather'}>Weather: {this.state.weather.weather[0].main}</li>] : this.state.error
                    }
                </ul>
            </div>
        )

    }

    async componentDidMount() {
        if (this.state.zip && this.state.zip.length === 5) {
            try {
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&APPID=544e633f1a1d6d7bb3378ec526f12f59`);
                this.setState({
                    weather: response.data,
                })
            } catch(error) {
                this.setState({
                    weather: [],
                    error: 'Zip code not available'
                })
            }
        }
    }

    _setZip = (zip) => {
        this.setState({
            zip
        }, this.componentDidMount)
    } 

    // _getWeather = async () => {
    //     const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=544e633f1a1d6d7bb3378ec526f12f59`);
    //     console.log(response.list);
    //     this.setState({
    //         weather: response
    //     })
    // }
}

export default Weather;