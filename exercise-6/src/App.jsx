import react, { useState } from 'react'

const App = () => {
    const state = useState();

    // const name  = ["vi",'no','d'];
    // const [vi,no,d] = name;
    let time = new Date().toLocaleTimeString();

    const [currtime, setTime] = useState(time);
    
    const CurrTime = () =>{
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    return (
        <>
        
            <h1>{currtime}</h1>
            <button onClick={CurrTime}>Click</button>
        </>
    )
}

export default App