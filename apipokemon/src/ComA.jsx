import React, { useEffect, useState } from 'react'
import axios from 'axios'



const ComA = () => {

    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [movesno, setMoves] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            // console.log()
            // console.log(res.data.moves.length)
            setName(res.data.name)
            setMoves(res.data.moves.length)
            setType(res.data.types[0].type.name)
        }

        getdata()
    })


    const setInput = (e) => {
        let input = e.target.value
        setNum(input)
    }

    return (
        <>
            <div className='container'>
                <div className='cont-left'>
                    <h1>You choose {num}</h1>
                    <h1>My name is <span>{name}</span></h1>
                    <h1> I have <span>{movesno}</span> moves</h1>
                    <h1> I am <span>{type}</span> pokemon</h1>
                </div>
                <div className='cont-right'>

                </div>
            </div>
            <select value={num} onChange={(event) => {
                setNum(event.target.value)
            }} >
                <option value='1'>Bulbasaur</option>
                <option value='4'>Charmander</option>
                <option value='7'>Squirtle</option>
                <option value='25'>Pikachu</option>
            </select>

            <h1>or</h1>
            <input onChange={setInput} placeholder="Type a number" />


        </>
    )
}

export default ComA