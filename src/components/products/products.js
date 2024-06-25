import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Details from "../details";
// import products from "../products.json";
import './products.css'
function Products(props) {
  const[products,setProducts] = useState()
useEffect(() => {
    const getData = async() =>{
      try {
       const data = await fetch('https://fakestoreapi.com/products')
       const jsonData = await data.json()
       setProducts(jsonData)
      } catch (error) {
      }
  }
  getData()
  return () => {
  };
}, []);

const getDetails = (e) =>{
  var id = e.target.getAttribute("value");
  var url = "https://fakestoreapi.com/products/" + id;
  getdetails(url).then(function (response) {
    localStorage.setItem("item", JSON.stringify(response));
    document.querySelector(".link").click();
  });
  async function getdetails(url) {
    var response = await fetch(url, {
      method: "GET",
      headers: {
        Origin: "http://localhost:3001",
        credentials: "include",
        "Content-Type": "application/json; charset=utf-8 ",
        Accept: "*/*",
      },
    });

    response = await response.json();
    return response;
  }
}

const addToCart = (id) =>{
  var targetButton = document.getElementById('targetButton');
    targetButton.classList.remove('animate'); // Remove the class to reset the animation

    // Force reflow to restart the animation
    void targetButton.offsetWidth;

    targetButton.classList.add('animate');
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
    products &&
    <div className="">
      <h4 className="bg-warning text-center text-primary p-2 position-fixed w-100" style={{top:"4.7rem"}}>Products</h4>
      <div
        className="mx-auto row justify-center m-5"
        style={{ width: "98%", margin: "auto" }}
      >
        {products.map((product) => {
          return (
            <div
              value={product.id}
              className="single-product inline-block col-6 col-md-4 col-lg-3 bg-white d-flex flex-column align-items-center justify-content-end border-2 border border-info rounded-3"
              
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
                            <h4
                value={product.id}
                className=""
    
              >
                ${product.price}
              </h4>
              </div>
            </Link>
              <button className='btn btn-warning mb-4' onClick={()=>addToCart(product.id)}>Add to Cart</button>  
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}

export default Products;
