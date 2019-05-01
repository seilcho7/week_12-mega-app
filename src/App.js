import React from 'react';
import './App.css';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';

import Home from './Home';

import { 
  Link,
  Route
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/weather">Weather</Link>
          </li>
          <li className="nav-item">
            <Link to="/fortune">Fortune</Link>
          </li>
          <li className="nav-item">
            <Link to="/joke">Joke</Link>
          </li>
          <li className="nav-item">
          <Link to="/all">All</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={Weather} />
        <Route path="/fortune" component={Fortune} />
        <Route path="/joke" component={Joke} />
        <Route path="/all" component={() => (
          <div>
            <Weather />
            <Fortune />
            <Joke />
          </div>
        )} />
        
      </div>
    );
  }
}

export default App;
