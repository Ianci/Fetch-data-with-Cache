import styled from '@emotion/styled'
import PropTypes from 'prop-types';

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

export const TitleComponent = ({ title }) => {
    return (
        <Title>{title}</Title>
    )
}

TitleComponent.propTypes = {
    title: PropTypes.string.isRequired
}