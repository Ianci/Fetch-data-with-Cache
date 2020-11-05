import React from 'react';

const useCustomFetch = async (value) => {
    const key = '9EmOFaV2f4ckc3N7qTE7gOYZMx8m7bQ7'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI( value) }&limit=100&offset=0&rating=g&lang=en`
    const response = await fetch(url)
    const data = await response.json()
    
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            image: gif.downsized_medium.url

        }
    })
}
 
export default useCustomFetch;