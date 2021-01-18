import React from "react";

// class component
// -don't have a return, but they have a render method.
// render method is from React.component.
// React is automatically going to execute the render method
// of your class component
class App extends React.Component {
  // State is an obecjt, and in state, you are going to
  // put the data of your component.
  // The data that will change
  state = {
    count: 0,
  };

  add = () => {
    //console.log("add");
    //this.state.count++;  // Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // If we don't use setState, the render function is
    // not going to be called with new state.
    this.setState((current) => ({ count: current.count + 1 }));
    //this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    //console.log("minus");
    //this.state.count--;
    this.setState((current) => ({ count: current.count - 1 }));
    //this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
