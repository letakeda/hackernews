import React, {Component} from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke'
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark'
  }
]

class App extends Component {
  render() {
    const welcome_message = 'Welcome to the road of learn React!';
    //welcome_message = 'text'
    return (
      <div className="App">
        <h2>{welcome_message}</h2>
      </div>
    )
  }
}

export default App;