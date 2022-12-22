import react from 'react'
import H1 from './H1'

let divstyle = {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(90deg, rgba(0,86,186,1) 0%, rgba(211,255,210,1) 100%)',
    justifyContent: 'center',
    alignItems: 'center'
}


function Div(){
    return <div style={divstyle}> <H1/>  </div>
}

export default Div