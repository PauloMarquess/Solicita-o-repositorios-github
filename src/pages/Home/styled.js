import styled from 'styled-components';

export const Container =styled.div `
width: 100vw;
height: 100vh;
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
height: 1.rem;
border: 1px solid #000;
background: #000;
color: white;
border-radius: 0 .25rem .25rem 0 ;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}

`