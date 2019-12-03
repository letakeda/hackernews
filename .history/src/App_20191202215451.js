import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    let welcome_message = 'Welcome to the road of learn React! Project: hackernews';
    welcome_message = 'text'
    return (
      <div className="App">
        <h2>{welcome_message}</h2>
      </div>
    )
  }
}

export default App;