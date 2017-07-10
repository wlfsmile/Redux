import React,{Component} from 'react';
import {render} from 'react-dom';

class Counter extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    const {value,onDecrement,onIncrement} = this.props;
    return(
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button>
          Increment if odd
        </button>
        {' '}
        <button>
          Increment async
        </button>
      </p>
    );
  }

}

export default Counter;