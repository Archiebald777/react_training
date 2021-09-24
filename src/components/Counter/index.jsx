import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: true,
      count: 0,
    };
  }
  click() {
    const { count, mod } = this.state;
    this.setState({
      count: mod ? this.props.step + count : count - this.props.step,
    });
  }

  changeMod() {
    const { mod } = this.state;
    this.setState({
      mod: !mod,
    });
  }

  render() {
    const { mod } = this.state;
    return (
      <div>
        <h1>Current count:{this.state.count}</h1>
        <h1>Current increment/decrement:{this.props.step}</h1>
        <button onClick={(e) => this.click(e)}>
          {mod ? "прибавляем" : "отнимаем"}
        </button>
        <button onClick={(e) => this.changeMod(e)}>Сменить режим</button>
      </div>
    );
  }
}

export default Counter;
