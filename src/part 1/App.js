import { Button } from "./Button";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <Button text="Press Me" onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
