import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Counters from "./Components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onInsert={this.handleInsert}
            counters={this.state.counters}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    let countersC = [...this.state.counters];
    countersC = countersC.map((c) => {
      let newCounter = { id: c.id, value: 0 };
      return newCounter;
    });
    this.setState({ counters: countersC });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleInsert = () => {
    const maxId = this.getMaxId(this.state.counters);
    let counters = [...this.state.counters];
    counters.push({ id: maxId + 1, value: 0 });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  getMaxId = (counters) => {
    let max = 0;
    counters.map(function (obj) {
      if (obj.id > max) max = obj.id;
    });
    return max;
  };
}
export default App;
