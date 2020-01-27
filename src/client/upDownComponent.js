import React from 'react';

class UpDownCounter extends React.Component{
  state = {
    count : 0,
  }

  increment = () => {
    const currentCount = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count : currentCount+1,
    })
  }

  decrement = () => {
    const currentCount = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count : currentCount-1,
    })
  }

  render(){
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>;
  }
}

export default UpDownCounter;