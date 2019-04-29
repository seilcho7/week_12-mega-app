import React from 'react';
import axios from 'axios';

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            number: 1
        }
    }

    render() {
        return (
            <div>
                <h2>Joke</h2>
                <ul>
                    {
                        this.state.joke ? <li>{this.state.joke}</li> : null
                    }
                </ul>
                <button onClick={this._decrement}>Prvious</button>
                <button onClick={this._increment}>Next</button>
            </div>
        )
    }

    async componentDidMount() {
        const response = await axios.get(`http://api.icndb.com/jokes/${this.state.number}`)
        this.setState({
            joke: response.data.value.joke
        })
    }

    _increment = () => {
        this.setState({
            number: this.state.number + 1
        }, this.componentDidMount)
    }

    _decrement = () => {
        if (this.state.number > 1) {
        this.setState({
            number: this.state.number - 1
        }, this.componentDidMount)
    }
    }
}

export default Joke;