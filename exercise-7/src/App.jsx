import React, { useState, useEffect } from "react"

const App = () => {
    const [num, setNum] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${num} times`
    })

    return <button
        onClick={() => {
            setNum(num + 1)
        }}
    >Clicked {num}</button>
}

export default App