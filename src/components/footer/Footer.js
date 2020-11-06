import React from 'react';
import styled from '@emotion/styled'
import {AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'

const Container = styled.div`
    max-width: 1500px;
    border-top: 1px solid grey;
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
`
const Paragraph = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif; 
    font-weight: 450;
`
const BackToTop = styled.p`
    cursor: pointer;
`
const FooterIcons = styled.div`
display: flex;
align-items: center;
`
const Icons = styled.span`
font-size: 1.5rem;
position: relative;
&:hover {
    font-size: 1.7rem;
}
`


const Footer = () => {

    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }


    return ( 
        <Container>
            <Content>
                <BackToTop onClick={backToTop}>
                    Volver arriba
                </BackToTop>
                <FooterIcons>
                    <Icons><a href="https://facebook.com" target="_blank" rel="noreferrer" style={{color: "inherit"}}><AiFillFacebook/></a>  </Icons>
                    <Icons> <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{color: "inherit"}}><AiOutlineTwitter/>  </a>   </Icons>
                    <Icons> <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{color: "inherit"}}><AiFillLinkedin />   </a>   </Icons>
                    <Icons> <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{color: "inherit"}}><AiOutlineInstagram/></a>   </Icons>
                </FooterIcons>
                <Paragraph>
                    Made by Ian &#169; 2020
                </Paragraph>
            </Content>
        </Container>
     );
}
 
export default Footer;