import * as React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = (): void => {
    this.setState((prevState: any) => ({count: prevState.count + 1}));
  };

  render(): JSX.Element {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;
