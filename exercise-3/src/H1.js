import react from 'react'
import Span from './Span'

let hour = new Date().getHours();

let h1style = {
    padding: '30px',
    fontSize: '40px',
    backgroundColor: '#303841',
    // backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    boxShadow: '#00000070 0px 0px 20px 10px',
    color: '#fff',
    borderRadius: "30px"
}

function H1(){
    return(
        <h1 style={h1style}> Hello Sir, <Span/> </h1>
    )
}

export default H1