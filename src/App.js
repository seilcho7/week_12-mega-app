import React from 'react';
import './App.css';
import Weather from './Weather';

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
      </div>
    );
  }
}

export default App;
