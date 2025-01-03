/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const handleIncrementByFive = () => {
    // dispatch({ type: "increment", amount: 5 });
    dispatch(counterActions.increase({ amount: 5 }));
  };
  const handleDecrement = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleIncrementByFive}>Increment By 5</button>
          <button onClick={handleDecrement}>Decremnt</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }
//   handleDecrement() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   counter = 0;
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decremnt</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
