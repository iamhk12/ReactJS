/*********************************************************************************************************************/
//UseContext

// import React, { createContext } from 'react'
// import ComA from "./ComA"

// const FirstName = createContext();
// const LastName = createContext();

// const App = () => {
//     return (
//         <>
//             <FirstName.Provider value={"Himanshu"}>
//                 <LastName.Provider value={"Kothari"}>
//                     <ComA />
//                 </LastName.Provider>
//             </FirstName.Provider>
//         </>
//     )
// }
// export default App
// export { FirstName , LastName}

/****************************************************************************************************************************/
import React, { useEffect, useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert("rendered")
    }, [num])
    return (
        <>
            {/* <h1></h1> */}
            <button style={{ padding: "10px 30px" }} onClick={() => { setNum(num + 1) }}> Click {num} </button>
            <br />
            <button style={{ padding: "10px 30px" }} onClick={() => { setNums(nums + 1) }}> Click {nums} </button>
        </>
    )
}

export default App












