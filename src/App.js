import React, { Component } from 'react';
import './App.css';
import ChoiceBar from './client/components/ChoiceBar'
import HelloMessageContainer from './client/containers/HelloMessageContainer';

class App extends Component {

  render() {
      const myProps = {
        title: "js",
        count: 123
      };
    return (
      <div className="App">
        <header className="App-header">
          <title>Votes as Service</title>
        </header>
        <ChoiceBar {...myProps}></ChoiceBar>
        {/* <HelloMessage value={1233456}/> */}
        <HelloMessageContainer />
      </div>
    );
  }
}

export default App;
