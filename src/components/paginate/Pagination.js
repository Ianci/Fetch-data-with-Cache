import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`
const PageBtn = styled.button`
    padding: 13px;
    color: #353535;
    background: #B4D4EE;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 3px;
    border-radius: 10px;
`

const Pagination = (props) => {

    const arrayPages = []

    for(let i = 1 ; i <= Math.ceil(props.limit / props.gifPerPage); i++){
        arrayPages.push(i)
    }

    return ( 
        
        <Container>
        {arrayPages.map(number=>{
            return (
                <PageBtn 
                type="button"
                onClick={()=> props.selectedPage(number)}
                >{number}</PageBtn>
            )
        })}
        </Container>
        
     );
}
 
export default Pagination;