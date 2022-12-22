// import React from 'react'
// import { Route, Switch } from 'react-router-dom';
// import About from "./About"
// import Contact from "./Contact"
// const App = ()=>{
//     return(
//         <>
//         <Switch>
//             <Route/>
//         </Switch>

//         {/* <About/>
//         <Contact/> */}
//         </>
//     )
// }

// export default App

//react v6

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"
import Navbar from "./Navbar"
const App = () => {

    const Name = () => {
        return <h1>Himanshu Kothari Here.</h1>
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route path='/contact/name' element={<Name />} />
                <Route path="*" element={<Error />} />
            </Routes>

            {/* <About/>
        <Contact/> */}
        </>
    )
}

export default App