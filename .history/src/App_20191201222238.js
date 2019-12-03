import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    var welcome_message = "Welcome to the road of learn React! Project: hackernews";
    return (
      <div className="App">
        <h2>{welcome_message}</h2>
      </div>
    )
  }
}

export default App;