import React, { useState } from 'react';
import useCustomFetch from '../hooks/CustomFetch'
import { useFetchReducer } from '../hooks/CustomFetchReducer'
import styled from '@emotion/styled'

const InputStyled = styled.input`
outline: none;
border: 0.2px solid white;
width: 375px;
height: 35px;
padding: 5px 10px;
border-radius: 20px;
&:hover {
    border: 1px solid red;
}
`
const ContainerInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const GifsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    max-width: 1000px;
`
const GifDiv = styled.div`

`

const GifForm = () => {
    const [ search, setSearch ] = useState('')
    const key = '9EmOFaV2f4ckc3N7qTE7gOYZMx8m7bQ7'
    const url = search && `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(search)}&limit=10&offset=0&rating=g&lang=en`
    
    //Tanto useFetchReducer como useCustomFetch funcionan sin tocar ninguna otra linea de código

    const { loading, data } = useFetchReducer(url, 2250)

    console.log(data)

    const handleChange = e => {
        setSearch(e.target.value)
    }
    return ( 
        <>
        <ContainerInput>
        <InputStyled  type="text" 
        placeholder="Search" 
        onChange={handleChange}
        value={search}
        />
        </ContainerInput>

        <GifsGrid>
        {loading && <p>Loading...</p>}
        {data &&
        (
            <>
                {data.map((gif)=>(
                    <>
                    <GifDiv>
                    <p>{gif.title}</p>
                    <img src={gif.images.fixed_width.url} alt={gif.title} />
                    </GifDiv>
                    </>
                ))}
            </>
        )}
        </GifsGrid>
        </>
     );
}
 
export default GifForm;