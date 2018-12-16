import React from 'react';
import './Grid.css';

export default class Grid extends React.Component {
  constructor({ data }) {
    super({ data });
    console.log(data)
    this.state = {
      color: true,
      data
    }
  }
  changeColor = (selectedGrid, data) => {
    console.log(data)
    if (data.find((_, i) => i === selectedGrid)) {
      return this.setState({
        color: !this.state.color
      })
    }
  }
  render() {
    //console.log(this.props.index)
    return (
      <div 
      className="grid"
      className= {this.changeColor(this.props.index) }>
      { this.props.label }
      </div>
    )
  }
}
