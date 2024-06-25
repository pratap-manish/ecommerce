import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/products/products';
import Navbar from './components/navbar/navbar';
import Details from './components/details';
import { useState } from 'react';
import  { BrowserRouter ,Routes, Route}from  'react-router-dom';
import Cart from './components/cart/cart';
function App(props) {
  const [productId, setProductId] = useState();
  return (<>
    <BrowserRouter>
    <Navbar  />
    <Routes>
    <Route exact path="/" element={<Products setProductId={setProductId} />}/>
    <Route path="/details/:productId"  element={<Details productId = {productId} />}/>
    <Route path="/cart"  element={<Cart setProductId={setProductId} />}/>
    
    </Routes>
    </BrowserRouter> 
    
    </>
  );
}
export default App;
