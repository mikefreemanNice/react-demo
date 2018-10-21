import React, { Component } from "react";
import "./App.css";
import Counters from "./compenent/counters";
import Navbar from "./compenent/navbar";

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ Counters: counters });
  };

  handleDelete = selectId => {
    const counters = this.state.Counters.filter(it => it.id !== selectId);
    this.setState({ Counters: counters });
  };

  handleReset = () => {
    const counters = this.state.Counters.map(it => {
      it.value = 0;
      return it;
    });
    this.setState({ Counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.Counters.filter(it => it.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.Counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
