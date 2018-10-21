import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: []
  };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClass()}>{this.formatFunction()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {/* {this.state.tags.length === 0 && <p>Please add a tag!</p>} */}
        {/* {this.getTags()} */}

        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
        Delete
        </button>
      </div>
    );
  }

  getTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeClass;
  }

  formatFunction() {
    const num = this.props.counter.value;
    return num === 0 ? "Zero" : num;
  }
}

export default Counter;
