import React, { Component } from "react";

class Game extends Component {
  state = {
    counter: 10
  };
  componentDidMount() {
    this.timer = setInterval(this.tick, 100);
  }
  tick = () => {
    const { counter } = this.state;
    if (counter === 0) {
      return this.gameOver();
    }
    this.setState({
      counter: this.state.counter - 1
    });
  };
  gameOver() {
    alert("Game over");
    clearInterval(this.timer);
  }
  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <button onClick={this.increase}>++</button>
      </div>
    );
  }
}

export default () => (
  <div>
    Hello world
    <Game />
  </div>
);
