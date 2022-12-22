import react from "react";
import { add, sub, mul, div } from './functions'
function App(){
    return(
        <>
        <ul> <li>The Sum of two numbers is {add(15, 15)}</li>
          <li>The Subtraction of two numbers is {sub(15, 15)}</li>
          <li>The Division of two numbers is {div(15, 15)}</li>
          <li>The Multiplication of two numbers is {mul(15, 15)}</li>
        </ul>
      </>
    );
}

export default App