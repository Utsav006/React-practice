import { useState } from "react";

function CounterApp() {
    const [count, setCount] = useState(0);
   function increment() {
        setCount(count + 1);
        if(count >= 20){
            alert("Count cannot be greater than 20");
            setCount(20);
        }
    }function decrement() {
        setCount(count - 1);
        if(count <= 0){
            alert("Count cannot be less than 0");
            setCount(0);
        }
    }function reset() {
        setCount(0);
    }   return (
        <div>
            <h2>You clicked {count} times</h2>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    );   
}

export default CounterApp;  