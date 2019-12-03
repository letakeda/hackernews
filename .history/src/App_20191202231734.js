import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: ' by Jordan Walke',
    objectID: 1
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: ' by Dan Abramov, Andrew Clark',
    objectID: 2
  }
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: list,
    }
  }

  render() {
    //const welcome_message = 'Welcome to the road of learn React!';
    //welcome_message = 'text'
    return (
      <div className="App">
        {list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>

        )}
      </div>
    )
  }
}

export default App;