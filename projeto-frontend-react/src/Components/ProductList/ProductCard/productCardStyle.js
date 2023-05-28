import styled from "styled-components";

export const ProductCardContainer = styled.div`
border: 2px solid blueviolet;
border-radius: 8px;
padding-bottom: 10px;
&:hover{
    border: 2px solid gold ;
    border-radius: 8px;
}

`

export const ImagemCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Images = styled.img`
border-radius: 6px;
width: 330px;
height: 348px;
`

export const AddCarrinho = styled.button`
background-color: #8e33e4;
display: block;
margin: auto;
border-radius: 10px;
width: 50%;
height: 6%;
color: white;
font-size: 14px;
&:hover{
    background-color: #9c17c5;
}
`
export const InfoProduct = styled.p`
padding: 10px;

`