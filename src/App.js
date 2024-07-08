import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/mainmain.css'
import Products from './components/products/products';
import Navbar from './components/navbar/navbar';
import Details from './components/details';
import { useState } from 'react';
import  { BrowserRouter ,Routes, Route}from  'react-router-dom';
import Cart from './components/cart/cart';
import Loader from './components/loader/loader';
function App(props) {
  const [productId, setProductId] = useState();
  return (<>
    <BrowserRouter>
    {/* <Loader isloading={props.isloading} /> */}
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
