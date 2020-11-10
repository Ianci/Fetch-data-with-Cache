import React from 'react';
import useCustomFetch from '../hooks/CustomFetch'
import styled from '@emotion/styled'
import { BASE_URL, API_KEY} from '../settings'
import { useParams, useHistory } from 'react-router-dom'
import Spinner from '../components/spinner/Spinner'
import Error404 from '../components/error/404'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`
const Title = styled.h1`
    font-weight: 800;
    padding: 10px;
    line-height: 1.3222;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`
const Paragraph = styled.p`
    padding: 10px;
    line-height: 1.3222;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`
const Anchor = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    color: white;
    margin: 20px;
    padding: 10px 12px;
    border: none;
    outline: none;
    margin-left: 20px;
    background-image: linear-gradient(to right top, #d16b6b, #cf6763, #cd635c, #ca5f54, #c75c4c, #cb5b4d, #ce594f, #d25850, #dd595d, #e85a6a, #f25c79, #fb5f88);;

`
const Button = styled.button`
    padding: 10px 60px;
    border-radius: 20px;
    outline: none;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.3222;
    background-image: linear-gradient(to right top, #d16ba5, #cf639c, #cc5c93, #c95489, #c64c80, #c94b7e, #cd497b, #d04879, #db4e7d, #e55381, #f05984, #fb5f88);
    color: white;
    font-weight: 600;
    cursor: pointer;
    `


const SingleGif = () => {
    const history = useHistory()
    const { id } = useParams()
    const urlFetch = `${BASE_URL}/gifs/${id}?api_key=${API_KEY}`

    const { loading, error, data} = useCustomFetch(urlFetch, 500)

    const { title, bitly_gif_url,  import_datetime, images } = !!data && data.data
    const { downsized } = !!data && images
    const { url } = !!data && downsized
    

    if(loading) return <Spinner />
    if(error) return <Error404 />
    return ( 
        <>
        <Container>
      
        <Title>{title}</Title>
        <Paragraph>Creado: {import_datetime}</Paragraph>
        <img src={url} alt="no alt" />
        <Anchor href={bitly_gif_url} target="_blank" rel="noreferrer">Abrir en página original</Anchor>
        <Button onClick={()=> history.push('/')}>Volver</Button>
        </Container>
        </>
     );
}
 
export default SingleGif;