import React from "react";

const Sresult = (props) =>{
    let image = props.searchItem
    const imgsrc = `https://source.unsplash.com/400x500/?${image}`


    return <>
        <div className="sResult">
            <img src={imgsrc} alt="" />
        </div>
    </>
}

export default Sresult
