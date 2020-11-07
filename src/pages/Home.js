import React, { useRef, useState, useEffect } from 'react';
import GifForm from '../components/gifForm'
import styled from '@emotion/styled'
import img1 from '../images/Img1.png'
import Footer from '../components/footer/Footer'
import {useOnScreen} from '../hooks/useOnScreen'

const Container = styled.div`
  max-width: 1050px;
  color: #fff;
  margin: 0 auto;
  min-height: 100vh;
  @media (max-width: 992px){
      max-width: 800px;
      margin: 0 auto;
      min-height: 100vh;
  }
`
const Title = styled.h1`
    display: inline-flex;
    position: absolute;
    top: 25px;
    padding-left: 220px;
    font-size: 35px;
    animation: bounce;
    animation-duration: 2s;
    @media (max-width: 992px){
       display: none;
    }
`


const Home = () => {
    const ref = useRef()
    const onScreen = useOnScreen(ref, '20px');
  
    return ( 
        <>
        <Container>
        <img src={img1} alt="img-logo" style={{width: "140px"}}/>
        <Title>Bienvenido a Gifhy! </Title>
        

        <GifForm />
        <div
        ref={ref}>

        {onScreen ?
        (
            <Footer />
        )
            :
            <p style={{display: "none"}}>Is not visible...yet</p>
        }
       

        </div>
        </Container>
        </>
     );
}
 
export default Home;