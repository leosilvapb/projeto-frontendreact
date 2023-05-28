import styled from "styled-components";

export const HomeContainer = styled.div`
height: 60vh;
grid-column: 2/3;
padding:8px;



`
export const HeaderHome = styled.div`
width: 100%;
/* border: 1px solid black; */
height: 4vh;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 10px;
font-size: 20px;
`

export const Label = styled.label`
padding-right: 25px;
`

export const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
padding: 16px;
gap: 30px;
`
export const QuantProducts = styled.p`
padding-left: 15px;
`
export const Option = styled.option`
font-size: 16px;
`
export const Select = styled.select`
font-size: 16px;
`