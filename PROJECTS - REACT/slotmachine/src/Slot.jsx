import react from 'react'

const Slot = (props) => {
    if (props.x === props.y && props.y === props.z) {
        return (
            <div className='slotcontainer'>
                <h1>{props.x}{props.y}{props.z}</h1>
                <h1>This is Matching</h1>
                <hr />
            </div>
        )
    }
    else {
        return (
            <div className='slotcontainer'>
                <h1>{props.x}{props.y}{props.z}</h1>
                <h1>This is NOT Matching</h1>
                <hr />
            </div>
        )
    }
}

export default Slot