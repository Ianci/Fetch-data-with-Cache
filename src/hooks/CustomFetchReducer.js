//Mismo custom hook pero ahora usando useReducer
import { useEffect, useReducer, useState } from 'react'


const initialState = {
    data: null,
    error: null,
    loading: false
}
const fetchReducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case 'LOADING':
            return{
                ...state, loading: true, data: null, error: null
        };
        case 'SUCCESS':
            return {
                ...state, loading: false, data: payload, error: null
            };
        case 'FAILURE':
            return {
                ...state, loading: false, data: null, error: payload
            };
        default:
            return state
    };
};

export const useFetchReducer = (url, time) => {
    const [ state, dispatch] = useReducer(fetchReducer, initialState)
  
    useEffect(() => {
        const timeOut = setTimeout(async() => {
            
            dispatch({ type: 'LOADING'})
            try {
                const response = await fetch(url)
                const dataResponse = await response.json()
                const clearData = dataResponse.data
                dispatch({ type: 'SUCCESS', payload: clearData})
            
            } catch (error) {
                
                dispatch({ type: 'FAILURE', payload: error})
            }
        }, time);
        return () => {
            clearTimeout(timeOut)
        }
    }, [url, time])


        return state
}

export const InstantFetch = (url) => {
    const [ gifData, setData ] = useState([])
    
    const fetch = async() => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setData(data)
    }
    return gifData
}