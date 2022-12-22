import react from 'react'
let hour = new Date().getHours();


let spancolor = () => {
    if (hour > 1 && hour <= 12)
        return "#0073ff";
    else if (hour > 12 && hour <= 16)
        return '#a5ff75';
    else if (hour > 16 && hour <= 20)
        return '#ffbb00';
    else
        return '#ffa3f6';
}

let greet = () => {
    if (hour > 1 && hour <= 12)
        return "Good Morning";
    else if (hour > 12 && hour <= 16)
        return 'Good Afternoon';
    else if (hour > 16 && hour <= 20)
        return 'Good Evening';
    else
        return 'Good Night';
}

let spanstyle = {
    color: spancolor()
}

function Span(){
    return <span style={spanstyle}> {greet()}</span>
}

export default Span