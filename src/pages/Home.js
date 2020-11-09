import React, { useRef, useState, useEffect } from 'react';
import GifForm from '../components/gifForm'
import styled from '@emotion/styled'
import img1 from '../images/Img1.png'
import Footer from '../components/footer/Footer'
import LazyLoad from 'react-lazy-load';
import  useTitle  from '../hooks/useTitle'
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
   
    useTitle('Giffy')
    return ( 
        <>
        <Container>
        <img src={img1} alt="img-logo" style={{width: "140px"}}/>
        <Title>Bienvenido a Gifhy! </Title>
        <GifForm />
        <LazyLoad offsetVertical={20}
         onContentVisible={() => console.log('look ma I have been lazyloaded!')}>
            <Footer />
        </LazyLoad>
        </Container>
        </>
     );
}
 
export default Home;