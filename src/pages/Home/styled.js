import styled from 'styled-components';

import ImgBackground from '../../assets/back.jpg';

export const Banner =styled.div `
background-image: url(${ImgBackground});
width: 100%;
height: 100vh;
background-repeat: no-repeat;
background-position: center;
`


export const HomeContainer =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

`


export const Contente =styled.div `
width: 100vw;

display: flex;
align-items: center;
justify-content:center ;

`

export const Input = styled.input`
border:2px solid #ddd;
border-radius:.25rem 0 0 .25rem;
padding: 0 .5rem;
height: 1.5rem;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`
export const Buttom = styled.button `
height: 2rem;
border: 3px solid #06394f;
background: #007eb1;
color: white;
border-radius: 0 .25rem .25rem 0 ;


&:focus,
&:active {
    outline: none;
    box-shadow: none;
}

`
export const ErrorMsg = styled.span`

display: block;
font-size:1rem;
color:white;
font-weight: 600;
margin-top: 1rem;

`