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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//react v6

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Error from "./Error";
// import Navbar from "./Navbar";
// const App = () => {
//   const Name = () => {
//     return <h1>Himanshu Kothari Here.</h1>;
//   };

//   return (
//     <>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<About />} />
//           <Route exact path="/contact" element={<Contact />} />
//           <Route exact path="/services" element={<Services />} />
//           <Route exact path="/contact/name" element={<Name />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//       {/* <About/>
//         <Contact/> */}
//     </>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//passing props in react router elements

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Error from "./Error";
// import Navbar from "./Navbar";
// const App = () => {
//   const Name = () => {
//     return <h1>Himanshu Kothari Here.</h1>;
//   };

//   return (
//     <>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<About name="HK" />}/> 
//           <Route exact path="/contact" element={<Contact name="Himanshu" />} />
//           <Route exact path="/services" element={<Services />} />
//           <Route exact path="/contact/name" element={<Name />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//       {/* <About/>
//         <Contact/> */}
//     </>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//useParams

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Error from "./Error";
// import User from "./User"
// import Navbar from "./Navbar";
// const App = () => {
//   const Name = () => {
//     return <h1>Himanshu Kothari Here.</h1>;
//   };

//   return (
//     <>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<About name="HK" />}/> 
//           <Route exact path="/contact" element={<Contact name="Himanshu" />} />
//           <Route exact path="/services" element={<Services />} />
//           <Route exact path="/contact/name" element={<Name />} />
//           <Route exact path="/user" element={<User />} />
//           <Route path="/user/:fname" element={<User />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//       {/* <About/>
//         <Contact/> */}
//     </>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//useLocation


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Error from "./Error";
// import User from "./User"
// import Navbar from "./Navbar";
// const App = () => {
//   const Name = () => {
//     return <h1>Himanshu Kothari Here.</h1>;
//   };

//   return (
//     <>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<About name="HK" />}/> 
//           <Route exact path="/contact" element={<Contact name="Himanshu" />} />
//           <Route exact path="/services" element={<Services />} />
//           <Route exact path="/contact/name" element={<Name />} />
//           <Route exact path="/user" element={<User />} />
//           <Route path="/user/:fname" element={<User />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//       {/* <About/>
//         <Contact/> */}
//     </>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//useHistory

// const navigate =  useNavigate ();
// For going back=> navigate(-1);
// For push => navigate('/about');

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Error from "./Error";
// import User from "./User"
// import Navbar from "./Navbar";
// const App = () => {
//   const Name = () => {
//     return <h1>Himanshu Kothari Here.</h1>;
//   };

//   return (
//     <>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<About name="HK" />}/> 
//           <Route exact path="/contact" element={<Contact name="Himanshu" />} />
//           <Route exact path="/services" element={<Services />} />
//           <Route exact path="/contact/name" element={<Name />} />
//           <Route exact path="/user" element={<User />} />
//           <Route path="/user/:fname" element={<User />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//       {/* <About/>
//         <Contact/> */}
//     </>
//   );
// };

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//search filter in react

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Error from "./Error";
import User from "./User"
import Search from "./Search";
import Navbar from "./Navbar";
const App = () => {
  const Name = () => {
    return <h1>Himanshu Kothari Here.</h1>;
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About name="HK" />}/> 
          <Route exact path="/contact" element={<Contact name="Himanshu" />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact/name" element={<Name />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="/user/:fname" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      {/* <About/>
        <Contact/> */}
    </>
  );
};

export default App;
