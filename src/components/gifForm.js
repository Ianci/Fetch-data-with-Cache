import React, { useState } from 'react';
import useCustomFetch from '../hooks/CustomFetch'
import {useFetchReducer} from '../hooks/CustomFetchReducer'
const GifForm = () => {
    const [ search, setSearch ] = useState('')
    const key = '9EmOFaV2f4ckc3N7qTE7gOYZMx8m7bQ7'
    const url = search && `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(search)}&limit=10&offset=0&rating=g&lang=en`
    
    //Tanto useFetchReducer como useCustomFetch funcionan sin tocar ninguna otra linea de código
    
    const { loading, data } = useFetchReducer(url, 1250)

    console.log(data)

    const handleChange = e => {
        setSearch(e.target.value)
    }
    return ( 
        <>
        <input type="text" 
        placeholder="Search" 
        onChange={handleChange}
        value={search}
        />
        <div className="container">
        {loading && <p>Loading...</p>}
        {data &&
        (
            <div>
               
            </div>
        )}
        </div>
        </>
     );
}
 
export default GifForm;