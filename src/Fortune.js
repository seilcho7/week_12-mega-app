import React from 'react';
import axios from 'axios';

class Fortune extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            fortune: []
        }
    }

    render() {
        return (
            <div className="text-center">
                <h2>Fortune</h2>
                <ul>
                    {
                        this.state.fortune.fortune ? <li>{this.state.fortune.fortune}</li> : null
                    }
                </ul>
                <button onClick={this._showWisdom}>Wisdom</button>
                <button onClick={this._showComputer}>Computer</button>
                <button onClick={this._showPolitic}>Politic</button>
            </div>
        )
    }

    _getFortune = async () => {
        const response = await axios.get(`https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune/${this.state.category}`);
        this.setState({
            fortune: response.data
        })
    }

    _showWisdom = () => {
        this.setState({
            category: 'wisdom'
        }, this._getFortune)
    }

    _showComputer = () => {
        this.setState({
            category: 'computers'
        }, this._getFortune)
    }

    _showPolitic = () => {
        this.setState({
            category: 'politics'
        }, this._getFortune)
    }
}


export default Fortune;