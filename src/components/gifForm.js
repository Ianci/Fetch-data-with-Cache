import React, { useState } from 'react';
import { useFetchReducer } from '../hooks/CustomFetchReducer'
import styled from '@emotion/styled'
import Spinner from '../components/spinner/Spinner'
import Pagination from '../components/paginate/Pagination.js'
import { useHistory } from 'react-router-dom'

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
@media (max-width: 992px){
        width: 320px;
}
`
const ContainerInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const GifsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    max-width: 1000px;
    margin-top: 2rem;
    margin-bottom: 2rem;
     @media (max-width: 992px){
        grid-template-columns: 1fr;
  }
  @media (max-width: 1024px) and (min-width: 993px){
        grid-template-columns: 1fr 1fr 1fr;
  }
`
const GifDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: initial;
    flex-direction: row;
    margin: 5px;
    @media (max-width: 992px){
        padding: 0.5rem;
       
  }
`
const GifP = styled.p`
position: absolute;
max-width: 190px;
text-align: center;
`
const Anchor = styled.a`
  background-color: #FF6392;
  position: absolute;
  text-decoration: none;
  color: white;
  font-weight: bold;

`
const GifForm = () => {
    const [ search, setSearch ] = useState('random')
    const [ currentPage, setCurrentPage] =useState(1)
    const [ gifPerPage, setGifPerPage ] = useState(12)

    console.log(setGifPerPage)
    const history = useHistory()

    const indexOfLastItem = currentPage * gifPerPage
    const indexOfFirstItem = indexOfLastItem - gifPerPage

    const key = '9EmOFaV2f4ckc3N7qTE7gOYZMx8m7bQ7'
    const limit= 50
    const url = search && `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(search)}&limit=${limit}&offset=0&rating=g&lang=en`
    
    //Tanto useFetchReducer como useCustomFetch funcionan sin tocar ninguna otra linea de código

    const { loading, data } = useFetchReducer(url, 2250)
    
    

    let currentGifs;
    if(data){
        currentGifs = data.slice(indexOfFirstItem, indexOfLastItem)
    }
        
  
   
    //Input value
    const handleChange = e => {
        setSearch(e.target.value)
    }
    //Pagination function
    const selectedPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

   //Pushear la id al path

    function idParameter(id){
        history.push(id)
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
        {loading && <Spinner />}
        {data &&
        (
            <>
                {currentGifs.map((gif)=>(
                    <>
                    <GifDiv
                    key={gif.id}>
                    <GifP>{gif.title}</GifP>
                    <img src={gif.images.fixed_width.url} alt={gif.title} 
                    onClick={()=> idParameter(gif.id)}
                    />
                    <div style={{position: "absolute" , display: "flex", justifyContent: "center"}}>
                    <Anchor href={gif.url} target="_blank" rel="noopener noreferrer">Expandir</Anchor>
                    </div>
                    
                    </GifDiv>
                    
                    </>
                ))}
            </>
        )}
        </GifsGrid>
        <Pagination 
        selectedPage={selectedPage}
        currentPage={currentPage}
        gifPerPage={gifPerPage}
        limit={limit}
        />
        </>
     );
}
 
export default GifForm;