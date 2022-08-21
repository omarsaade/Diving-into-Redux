import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';
import React from 'react'



const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  // console.log(counterActions);

  const increaseHandler = () => {
    //payload 7umulah
    dispatch(counterActions.increase(10));
  }


  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  //reference type احاله و اسناد
  // primitive جاهل بدائي  
  return (

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>

        <button onClick={increaseHandler}>Increase By 10</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>

  );
};

export default Counter;


//__________________________________________________________________________________________________________
//                                        WITHOUT REDUX TOOLKIT
/*

import classes from './Counter.module.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);


  const incrementHandler = () => {
    //an action is an object with a type property 
    dispatch({ type: "increment" });
  }



  const increaseHandler = () => {
    //payload 7umulah
    dispatch({ type: "increaseby5", amount: 5 });
  }


  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  }


  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  //reference type احاله و اسناد
  // primitive جاهل بدائي  
  return (

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>

        <button onClick={increaseHandler}>Increase By 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>

  );
};

export default Counter;
*/
