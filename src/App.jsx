import { useState } from "react";

function useCounter(){
  const[count,setCount] =useState(0);
  function increaseCount(){
    setCount(count+1)
  }

  return{
    count:count , 
    increaseCount:increaseCount
  }
}

function Counter(){
  const{count,increaseCount}=useCounter(0)
  return (
    <button onClick={increaseCount}>Count {count}</button>
  )
}
function App(){
  return(
    <Counter/>
  )
}

export default App 