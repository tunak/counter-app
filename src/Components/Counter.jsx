import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete, onDecrement } = this.props;
    return (
      <div class="row">
        <div className="col-1">
          <span className={this.generateClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? true : false}
            onClick={() => onDecrement(counter)}
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            onClick={() => onDelete(counter)}
            className="btn btn-danger btn-sm"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    );
  }

  generateClasses() {
    let classes = "badge left m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
