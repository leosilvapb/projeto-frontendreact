import styled from "styled-components";

export const ItemsContainer = styled.div`
padding-left: 15px;
padding-top: 15px;
font-size: 18px;
`
export const ItemsCart = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
export const Remove = styled.button`
background-color: #8e33e4;
color: white;
width: 30%;
border-radius: 10px;
height: 30px;
cursor: pointer;
&:hover{
    background-color: #9c17c5;
}
`
export const Image = styled.img`
padding-right: 5px;
width: 35px;
height: 35px;
`
export const Quantity = styled.p`
padding-top:10px ;
`
export const Value = styled.p`
padding-right: 10px;
`