

function logger(reducer) {
    return (prevState, actoion) =>{

        console.group(actoion.type)
        console.log('Prev state: ', prevState);
        console.log('Action: ', actoion);

        const newState = reducer(prevState, actoion)

        console.log('Next state: ', newState);

        console.groupEnd()
        return newState
    }
}

export default logger