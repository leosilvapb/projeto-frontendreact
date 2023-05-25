import styled, { createGlobalStyle } from 'styled-components';
import { Filter } from './Components/Filters/Filter';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { productList } from './Components/assents/productsList';




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
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 15px;
column-gap: 8px;

`

function App() {
  console.log(productList);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Filter />
        <Home
          productList={productList}
        />
        <Cart />
      </Container>
    </>
  );
}

export default App;
