import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props)
    this.handleLocked = this.handleLocked.bind(this)
  }
  handleLocked(){
    return this.props.handleToggleLocked(this.props.idx)
  }
  render() {
    return (
      <button
        className={this.props.locked ? "Die Die-locked" : "Die"}
        onClick={this.handleLocked}>
        {this.props.val}
      </button>
    );
  }
}

export default Die;
