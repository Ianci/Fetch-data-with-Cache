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
            const result = await axios(urlGifs);
            setData(result.data)
           
        }
        fetchData()
    }, [])

   
  
  
       return (
        <Container>
            <h1>Buenas</h1>
        </Container>
      );
}
 
export default Gif;