import React, { useState, useEffect } from "react";
import Button from "./Button";
import Text from "./counter_text";
import "../styles/counter.css";

const Counter = (props) => {
  


  const [values, setValues] = useState({
    counterValue: props.initialValue,
    maxValue: props.maxValue ? props.maxValue : 1000,
  });

  const { counterValue, maxValue } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]:
        event.target.value <= maxValue ? Number(event.target.value) : maxValue,
    });
  };

  const incrementCounter = () => {
    setValues({ ...values, counterValue: counterValue + 1 });
  };

  const decrementCounter = () => {
    setValues({ ...values, counterValue: counterValue - 1 });
  };                                                 

  const displayCounter = () => {
    return (
      <>
      <div className="board">
      <div className="container">
        <Button onClick={decrementCounter} className="btn-dec">
          -
        </Button>

        <input
          type="number"
          value={counterValue}
          name="counterValue"
          onChange={handleChange("counterValue")}
        />

        <Button
          onClick={incrementCounter}
          disabled={counterValue === maxValue}
          className="btn-inc"
        >
          +
        </Button>
        <Text counterValue={counterValue}/>
      </div>
      <div>
      
      </div>
     
      </div>
      </>
    );
  };

  return <div>{displayCounter()}</div>;
};

export default Counter;
