import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Details from "../details";
// import products from "../products.json";
import './products.css'
import RateProduct from "../rating/rateProduct";
function Products(props) {
  const[products,setProducts] = useState()
  const[networkError,setnetworkError] = useState(false)
useEffect(() => {
    const getData = async() =>{
      try {
       const data = await fetch('https://fakestoreapi.com/products')
       if(data.status === 404){
        setnetworkError(true)
       }
       const jsonData = await data.json()
       setProducts(jsonData)
      } catch (error) {
      }
  }
  getData()
  return () => {
  };
}, []);


const addToCart = (id) =>{
  var targetButton = document.getElementById('targetButton');
    targetButton.classList.remove('animate'); // Remove the class to reset the animation

    // Force reflow to restart the animation
    void targetButton.offsetWidth;

    targetButton.classList.add('animate');
    //add product to cart
  let cart = localStorage.getItem("cartProducts");
  if(!cart){
    cart = []
  }
  else{
    cart = JSON.parse(cart)
  }
  if(cart[id]==null){
    cart[id]=1;
  }
  else{
    cart[id]= cart[id]+1;
  }
  localStorage.setItem("cartProducts",JSON.stringify(cart));
}
  return ( 
    <>
    {products &&
    <div className="">
      <h4 className="bg-maintheme text-center text-primary p-2 position-fixed w-100" style={{top:"4.7rem"}}>Products</h4>
      <div
        className="mx-auto row justify-center m-5"
        style={{ width: "98%", margin: "auto" }}
      >
        {products.map((product) => {
          return (
            <div
              value={product.id}
              className="inline-block col-6 col-md-4 col-lg-3 bg-white d-flex flex-column align-items-center justify-content-end border-2 border border-info rounded-3"
              
            >
            <Link to={"/details/" + product.title} className="d-flex flex-column text-center justify-content-around h-100 text-decoration-none p-3" onClick={()=>{props.setProductId(product.id )}}  >
              <img
                value={product.id}
                src={product.image}
                style={{ width: "calc(5rem + 40%)",height:"50%"}}
                alt="product image"
                className="mx-auto"
              />
              <div className="d-flex flex-column w-100">
              <h6
                value={product.id}
                className="inline-block"
                
              >
                {product.title}
              </h6>
              <h4
                value={product.id}
                className=""
    
              >
                ${product.price}
              </h4>
              <RateProduct product={product} />
              </div>
            </Link>
              <button className='btn btn-maintheme mb-4' onClick={()=>addToCart(product.id)}>Add to Cart</button>  
            </div>
          );
        })}{" "}
      </div>
    </div>
}
    {!products && networkError && <> <h4 className="text-danger">Error, Couldn't load products</h4><h5 className="">Check your connection</h5> </>}
    </>
  );
}

export default Products;
