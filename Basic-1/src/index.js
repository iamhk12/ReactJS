// import react from 'react'
// import reactDOM from 'react-dom'

// const img1 = 'https://picsum.photos/200/200';
// const img2 = 'https://picsum.photos/300/500';
// const img3 = 'https://picsum.photos/1200/720';
// const link = 'https://www.google.com';

// let name = 'Himanshu Kothari'

// const heading = {
//   color: "wheat",
//   backgroundColor: "#303030",
//   borderRadius: "10px",
//   margin: "auto 0px",
//   padding: "20px 40px"

// }

// reactDOM.render(
//   <>
//     <h1 style={heading} >My name is {name}</h1>

//     <img src={img1} alt='Picsum' />
//     <img src={img2} alt='Picsum' />
//     <a href={link} target='_blank' rel="noreferrer"><img src={img3} alt='Picsum' /></a>

//   </>,
//   document.getElementById('root')
// );

/***********************************************************************************************************************/

//COMPONENTS
// import react from 'react';
// import reactDOM from 'react-dom';

// import App from './App'
// reactDOM.render(
//     <App/>, document.getElementById('root')
// );

/***********************************************************************************************************************/

//ES6 - Import export

// import react from 'react';
// import reactDOM from 'react-dom';
// import * as  ques from './App'

// reactDOM.render(
//     <>
//     <li>
//         <li>Himanshu</li>
//         <li>{ques.default}</li>
//         <li>{ques.number}</li>
//         <li>{ques.myname()}</li>
//         <li>{ques.mynames()}</li>
//     </ol>

//     </>,
//     document.getElementById('root')
// );

/***********************************************************************************************************************/

// Top 5 netflix --> REACT PROPS


// import react from 'react';
// import reactDOM from 'react-dom';
// import Card from './Card'
// import './index.css'
// import sData from "./sData"

// function allcard(val) {

//     return (
//         <Card
//             name={val.name}
//             imgsrc={val.imgsrc}
//             title={val.title}
//             link={val.link}
//         /
//     );
// }

// reactDOM.render(
//     <>
//         <section className='containerofcards'>
//             <h1>LIST OF TOP 5 SERIES</h1>
//             <div className='cards'>
//                 {/*<Card
//                     name={sData[0].name}
//                     imgsrc={sData[0].imgsrc}
//                     title={sData[0].title}
//                     link={sData[0].link}
//                 />
//                 <Card
//                     name={sData[1].name}
//                     imgsrc={sData[1].imgsrc}
//                     title={sData[1].title}
//                     link={sData[1].link}
//                 />
//                 <Card
//                     name={sData[2].name}
//                     imgsrc={sData[2].imgsrc}
//                     title={sData[2].title}
//                     link={sData[2].link}
//                 />
//                 <Card
//                     name={sData[3].name}
//                     imgsrc={sData[3].imgsrc}
//                     title={sData[3].title}
//                     link={sData[3].link}
//                 />
//                 <Card
//                     name={sData[4].name}
//                     imgsrc={sData[4].imgsrc}
//                     title={sData[4].title}
//                     link={sData[4].link}
//                 /> */}

//                 {
//                     //array.map(function(value,index,arrayName),thisValue)
//                     sData.map((val) => {
//                         return (
//                             <Card
//                                 key={val.key}
//                                 name={val.name}
//                                 imgsrc={val.imgsrc}
//                                 title={val.title}
//                                 link={val.link}
//                             />

//                         );
//                     })
//                 };

//             </div>
//         </section>
//     </>,
//     document.getElementById('root')
// );


/************************************************************************************************************************/

//If else in react

// import react from 'react';
// import reactDOM from 'react-dom';
// import Card from './Card'
// import './index.css'
// import Netflix from './Netflix';
// import Amazon from './Amazon';
// import sData from "./sData"

// let fav = 'Amazon'

// const FavCard = () => {
//     if (fav === 'Netflix')
//         return <Netflix />
//     else
//         return <Amazon />
// }

// //TERNARY OPERATOR


// reactDOM.render(
//     <>
//         <section className='containerofcards'>
//             <h1>LIST OF TOP 5 SERIES</h1>
//             <div className='cards'>
//             {/* <FavCard/> */}  
//             {/* {(fav === 'Netflix') ? <Netflix /> : <Amazon />} */}
//             </div>
//         </section>
//     </>,
//     document.getElementById('root')
// );


/************************************************************************************************************************** */

//react HOOKS

// import react from 'react'
// import reactDOM from 'react-dom'
// import App from './App'
// import './index.css'
// reactDOM.render(
//     <>
//         <div className='containerofhook'>
//             <App />
//         </div>
//     </>, document.getElementById('root')
// )


/***************************************************************************************************************************/

//Digital clock


// import react from 'react'
// import reactDOM from 'react-dom'
// import App from './App'
// import './index.css'
// reactDOM.render(
//     <>
//             <App />
     
//     </>, document.getElementById('root')
// )

/***************************************************************************************************************************/

import react from 'react'
import reactDOM from 'react-dom'
import App from './App'
import './index.css'
reactDOM.render(
    <>
            <App />
     
    </>, document.getElementById('root')
)