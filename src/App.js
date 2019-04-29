import React from 'react';
import './App.css';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <Weather />
        <Fortune />
        <Joke />
      </div>
    );
  }
}

export default App;
