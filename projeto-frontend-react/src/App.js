import styled, { createGlobalStyle } from 'styled-components';
import { Filter } from './Components/Filters/Filter';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { productList } from './Components/assents/productsList';
import React, { useEffect, useState } from 'react';
import { Header } from './Components/Header/Header';

const GlobalStyles = createGlobalStyle` //cria uma estilização global
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:Arial, Helvetica, sans-serif ;
}
`

const Container = styled.div`
font-size: medium;
color: #ffffff;
background-color: #54544d;
background: url(https://images.alphacoders.com/193/193.jpg) ; 
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
  const [stateOrdination, setStateOrdanition] = useState([...productList])
  const [initialList, setInitialList] = useState([...productList])

  useEffect(() => {
    setStateOrdanition(
      initialList.filter((products) => {
        return minFilter ? products.value >= minFilter : products
      }).filter((products) => {
        return maxFilter ? products.value <= maxFilter : products
      }).filter((products) => {
        return searchFilter ? products.name.toLowerCase().includes(searchFilter.toLowerCase()) : products
      })
    )
  }, [minFilter, maxFilter, searchFilter])


  useEffect(() => {
    setTimeout(() => {
      const cartSave = JSON.stringify(cart)
      const amountSave = JSON.stringify(amount)
      localStorage.setItem("cart", cartSave)
      localStorage.setItem("amount", amountSave)
    }, 10)
  }, [cart])

  useEffect(() => {
    const loadCart = JSON.parse(localStorage.getItem("cart"))
    const loadAmount = JSON.parse(localStorage.getItem("amount"))
    setCart([...loadCart])
    setAmount(loadAmount)
  }, [])

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
          stateOrdination={stateOrdination}
          setStateOrdanition={setStateOrdanition}
          initialList={initialList}
          setInitialList={setInitialList}
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

//PR para correção