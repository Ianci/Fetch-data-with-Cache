import React, { useState, useEffect } from 'react';
import  useCustomFetch  from '../hooks/CustomFetch'
import { InstantFetch } from '../hooks/CustomFetchReducer'
import { useFetchReducer } from '../hooks/CustomFetchReducer'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from '@emotion/styled'
import Spinner from '../components/spinner/Spinner'
const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Gif = () => {
   
    let { id } = useParams()
    const key = 'AzDkPFE6y9OlHkGyAWRW93DeyGr7Vyuw'
    const urlGifs = id && `https://api.giphy.com/v1/gifs/${id}?api_key=${key}`
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get(urlGifs);
            setData(result.data)
           
        }
        fetchData()
    }, [])

    if(!data) return;
   let title;
   let date;
   let gifImage;
   let url;

   let map = new Map(Object.entries(data).map(
       ([key, value]) => [key, value]
   ));
   console.log(([...map][0][1]))
   url = (([...map][0][1].url))
   gifImage = (([...map][0][1].images.original.url))
   title = (([...map][0][1].title))

       return (
        <Container>
            <h1>{title}</h1>
            <img src={gifImage} alt='no alt' />
            <a href={url} target="_blank" rel="noreferrer">URL</a>
        </Container>
      );
}
 
export default Gif;