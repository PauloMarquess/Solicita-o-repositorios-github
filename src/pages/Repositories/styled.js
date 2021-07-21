import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const Fundo = styled.div `
background-image: linear-gradient(to right,#06394f,#007eb1);
height: 100vh;
display: flex;
justify-content: center;
border: solid 3px;
border-radius: 5%;
`

export const Container = styled.div`

width: 100%;
max-width: 991px;
margin: 0 auto;
`

export const Title = styled.h1`
text-align:center;
font-size: 2rem;
font-family: sans-serif;
color:white ;
font-weight:bolder;
`
export const List =styled.ul`
list-style: none;
padding: 0;
font-family: sans-serif;
font-weight: bolder;

`

export const ListItem =styled.li `
margin: .5rem 0;
background:#034058;
color: white;
padding:.5rem;
border-radius: 103px ;
`
export const LinkHome =styled(Link)`
display: block;
width: 4rem;
text-align: center;
margin:2rem auto ;
background-color: #034058;
padding: 0%.5rem 0;
text-decoration: none;
color:white;
border-radius: 103px;
font-weight: bold;


`