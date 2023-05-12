import { createGlobalStyle } from 'styled-components';
import { Filter } from './Components/Filters/Filter';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';


const GlobalStyles = createGlobalStyle` //cria uma estilização global
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`

function App() {
  return (
    <>
      <GlobalStyles />
      <Filter />
      <Home />
      <Cart />
    </>
  );
}

export default App;
