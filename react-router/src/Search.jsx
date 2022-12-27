import React, { useState } from "react";
import Sresult from "./Sresult"
const Search = () => {

    const [img, setImg] = useState("")

    const inputImgText = (e) => {
        console.log(e.target.value)
        setImg(e.target.value)
    }
    return <>  
        <div className="search">
            <input type="text" onChange={inputImgText} value={img} placeholder="Search Images" />
        </div>
        {img==="" ? (<></>):(<Sresult searchItem ={img} />)}
    </>
}

export default Search