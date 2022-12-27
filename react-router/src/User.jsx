import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
const User = () => {

    //always write key in {}
    let { fname } = useParams() //useParams

    const location = useLocation() //useLocation 

    let navi = useNavigate(-1)
    // fname = useParams()
    /* hash: ""
     key: "vxw472f2"
     pathname: "/user/Himanshu"
     search: ""
     state: null*/

    return <>
        <div className="user">
            <h1>Good day, {fname}</h1>
            <br/>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/user/Himanshu`? 
            (<button onClick={()=>{
                navi(-1)
            }} >Click Me</button>) : null}
        </div>
    </>
}

export default User