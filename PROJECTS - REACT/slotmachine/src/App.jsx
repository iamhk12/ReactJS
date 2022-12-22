import react from 'react'
import Slot from './Slot'

const App = () => {
    return (
        <>
            <h1 className='heading'> 🎰 Welcome to <span style={{ fontWeight: "bold" }}> Slot Machine game </span> 🎰 </h1>
            <div className='slotmachine'>
                <Slot x="😂" y="😂" z="😂" />
                <Slot x="😂" y="😂" z="👌" />
                <Slot x="🍎" y="🙌" z="😂" />
                <Slot x="❤️" y="❤️" z="❤️" />

            </div>
        </>
    )
}

export default App