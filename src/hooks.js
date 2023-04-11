import React, { useState, useEffect } from 'react';


const useFlip = (initialState=true) => {
    const [state, setState] = useState(initialState)
    const toggleFlip = () => {
        setState(state => !state)
    }
    return [state, toggleFlip]
}

const useAxios = () => {

}

export default {
    useFlip,
    useAxios
}