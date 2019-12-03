import React, { Component } from 'react';
import './App.css';

const title = (<h2>Takeda</h2>)

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
    objectID: 2,
    ppints: 3
  },
  {
    title: 'The New React',
    url: 'https://newreact.js.org',
    author: ' by Leandro Takeda',
    objectID: 3
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
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a></span>
            <span>{item.author} </span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)} type="button">Dismiss</button>
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default App;