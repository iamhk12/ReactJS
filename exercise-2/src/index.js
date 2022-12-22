import react from 'react';
import ReactDOM from 'react-dom';

let date = new Date()

let todayDate = date.toLocaleDateString();
let time = date.toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>Hello, My name is Himanshu Kothari</h1>
    <div>
      <p>{`Today's Date is ${todayDate}`}</p>
      <p>{`Current time is ${time}`}</p>
    </div>
  </>
  ,
  document.getElementById('root')
)