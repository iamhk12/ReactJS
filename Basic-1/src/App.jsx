// import react from 'react'
// import Heading from './Heading'
// import Para from './Para'
// import List from './List'

// function App(){
//     return (
//         <>
//         <Heading/>
//         <List/>
//         <Para/>
//     </>
//     )
// }

// export default App

/***********************************************************************************************************************/

//IMPORT EXPORT

// const youtuber = 'HK';
// const number = 12;

// export default  youtuber;

// const myname = ()=>{

//     let name = 'HIMANSHU MUKESH KOTHARI';
//     return name;
// };

// function mynames(){
//     let names = 'HIMANSHUs';
//     return names;
// };

// export {number, myname, mynames}

/*********************************************************************************************************************** */

//HOOKs

// import react, { useState } from 'react'

// let count = 0;



// const App = () => {
//     const state = useState();

//     // const name  = ["vi",'no','d'];
//     // const [vi,no,d] = name;

//     const [count, setCount] = useState(0);

//     const IncNum = () =>{
//         setCount(count+1);
//     }
//     return (
//         <>

//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click</button>
//         </>
//     )
// }

// export default App

/*********************************************************************************************************************** */

//digital clock in react


// import react, { useState } from 'react'

// let count = 0;



// const App = () => {
//     const state = useState();

//     // const name  = ["vi",'no','d'];
//     // const [vi,no,d] = name;

//     let time = new Date().toLocaleTimeString();

//     const [currTime, setTime] = useState(time);

//     const TimeClick = () => {
//         let time = new Date().toLocaleTimeString();
//         setTime(time);
//     }

//     setInterval(
//         () => {
//             TimeClick()
//         }, 100
//     )

//     return (
//         <>
//             <h1>{currTime}</h1>
//         </>
//     )
// }
// export default App

/***********************************************************************************************************************************/

// import react, { useState } from 'react'

// const App = () => {

//     const bgChange = () => {
//         console.log("Clicked")
//         let blue = "rgb(0, 37, 67";
//         setBg(blue);
//         setString("OUCH !! 😢")
//     }

//     const bgBack = () =>{
//         setBg(green);
//     }
//     const dblclick = () =>{
//         setString(oldstring)
//         bgBack();
//     }


//     let green = "#015c46";
//     const [bg, setBg] = useState(green);

//     let oldstring = "Click me";

//     const [string, setString] = useState(oldstring);
//     return (
//         <>
//             <div onMouseOver={bgChange} style={{ backgroundColor: bg }} className='containerofhook'>
//                 <button onMouseEnter={dblclick} onDoubleClick={dblclick} > {string} </button>
//             </div>
//         </>
//     )
// }
// export default App


/***************************************************************************************************************************/

//FORM - #1
// import react, { useState } from 'react'

// const App = () => {

//     const inputeventName = (event) => {
//         setName(event.target.value)
//     }

//     const inputeventPass = (event) => {
//         setPass(event.target.value)
//     }

//     const [name, setName] = useState("");

//     const [pass, setPass] = useState("");

//     const [myFullName, setFname] = useState("");

//     const [myPass, setPassW] = useState("")

//     const onSubmitS = (e) => {
//         e.preventDefault();
//         setFname(name);
//         setPassW(pass);
//     }


//     return (
//         <>
//             <form>
//                 <div className='form' onSubmit={onSubmitS}>
//                     <h1>Hello {myFullName} {myPass}</h1>
//                     <input type='text' placeholder='Enter your Name ' onChange={inputeventName} value={name} />
//                     <input type='password' placeholder='Enter your Password ' onChange={inputeventPass} value={pass} />
//                     <button type='submit' onClick={onSubmitS} >Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default App

/***************************************************************************************************************************/

//Form #2

// import react, { useState } from 'react'

// const App = () => {

//     const onSubmitS = (event) => {
//         event.preventDefault();
//         alert("Form Submitted")
//     }

//     const [currValue, setValue] = useState({
//         name: "",
//         pass: ""
//     })

//     const inputevent = (event) => {
//         console.log(event.target.value)
//         console.log(event.target.name)

//         let value = event.target.value;
//         let name = event.target.name;

//         setValue((x) => {
//             if (name === "name") {
//                 return{
//                     name : value,
//                     pass : x.pass
//                 }
//             }
//             else if(name === "pass"){
//                 return { 
//                     name : x.name,
//                     pass : value
//                 }
//             }
//         })

//     }
//     return (
//         <>
//             <form>
//                 <div className='form' onSubmit={onSubmitS}>
//                     <h1>Hello </h1>
//                     <input type='text'
//                         placeholder='Enter your Name '
//                         name='name'
//                         onChange={inputevent}
//                     // value={currValue.name}
//                     />


//                     <input type='password'
//                         placeholder='Enter your Password '
//                         name='Pass'
//                         onChange={inputevent}
//                     // value={currValue.pass}
//                     />
//                     <button type='submit'> Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default App

/***************************************************************************************************************************/

//Form #3

import react, { useState } from 'react'

const App = () => {

    const onSubmitS = (event) => {
        event.preventDefault();
        alert("Form Submitted")
    }

    const [currValue, setValue] = useState({
        fname: "",
        lname: "",
        email: "",
    })

    const inputevent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        // let value = event.target.value;
        // let name = event.target.name;

        let { value, name } = event.target;
        setValue((x) => {

            return {
                ...x,
                [name]: value
            }


            /*if (name === "fname") {
                return {
                    fname: value,
                    lname: x.lname,
                    email: x.email,
                    phone: x.phone
                }
            }
            else if (name === "lname") {
                return {
                    fname: x.fname,
                    lname: value,
                    email: x.email,
                    phone: x.phone
                }
            }
            else if (name === "email") {
                return {
                    fname: x.fname,
                    lname: x.lname,
                    email: value,
                    phone: x.phone
                }
            }
            else if (name === "phone") {
                return {
                    fname: x.fname,
                    lname: x.lname,
                    email: x.email,
                    phone: value
                }
            } */



        })





    }
    return (
        <>
            <form>
                <div className='form' onSubmit={onSubmitS}>
                    <h1>Hello {currValue.fname} {currValue.lname}  </h1>
                    <p> {currValue.email} </p>
                    <p> {currValue.phone} </p>
                    <input type='text'
                        placeholder='Enter your First Name '
                        name='fname'
                        onChange={inputevent}
                        value={currValue.fname}
                    />


                    <input type='text'
                        placeholder='Enter your Last Name '
                        name='lname'
                        onChange={inputevent}
                        value={currValue.lname}
                    />

                    <input type='text'
                        placeholder='Enter your Email-id '
                        name='email'
                        onChange={inputevent}
                        value={currValue.email}
                    />

                    <input type='text'
                        placeholder='Enter your Contact no. '
                        name='phone'
                        onChange={inputevent}
                        value={currValue.phone}
                    />
                    <button type='submit'> Submit</button>
                </div>
            </form>
        </>
    )
}

export default App