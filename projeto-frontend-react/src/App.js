import styled, { createGlobalStyle } from 'styled-components';
import { Filter } from './Components/Filters/Filter';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { productList } from './Components/assents/productsList';
import React, { useState } from 'react';

const GlobalStyles = createGlobalStyle` //cria uma estilização global
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:Arial, Helvetica, sans-serif ;
}
`

const Container = styled.div`
color: white;
background-color: #54544d;
background: url(https://images3.alphacoders.com/563/563119.jpg) ; 
    background-repeat: no-repeat;
    background-size:100%;
    bottom: 0;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    top: 0;
    background-size: cover;
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 15px;
column-gap: 8px;

`

function App() {
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState("")
  return (
    <>
      <GlobalStyles />
      <Container>
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          productList={productList}
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
      </Container>
    </>
  );
}

export default App;
