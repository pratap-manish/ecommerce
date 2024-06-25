import React, { useEffect, useState } from 'react';
import { useSyncExternalStore } from 'react';
import apiCalls from '../../apicalls';
import { Link } from 'react-router-dom';

function Cart(props) {
    const [cartProducts, setcartProducts] = useState([]);
    useEffect(() => {
        const getCart = () => {
            const response = localStorage.getItem("cartProducts")
            if(response){
                return JSON.parse(response);
            }
            else{
                return [];
            }
        }
        const cartItems = getCart();
        const getProducts = async(count,id) =>{
        const product = await apiCalls.Get("https://fakestoreapi.com/products/" + id);
        product.count = count;
        setcartProducts((prev)=>[
            ...prev,
        product
        ])
        }
        setcartProducts([])
        const data = async()=>{
            await cartItems.map((each,index)=>{
            if(each>=1){
                getProducts(each,index)
            }
        })
        
    }
    data();
        return () => {
            
        };
    }, []);


    //function to decrease count of product from cart
    const decreaseQuantity = (product)=>{
        setcartProducts(cartProducts.map((item)=>
            item.id===product.id?
                {...item,count:item.count>0?item.count-1:item.count}:{...item}
        ))
        if(product.count>=1){
          updateCart(product,true)
        }
      
      }
     const removeProduct = (product)=>{
      console.log("check");
      const products = [...cartProducts];
      console.log(products);
      const newProducts = products.filter((item) => {return item.id !== product.id}
      )
      console.log(newProducts);
      setcartProducts(newProducts)
     }

    //function to increase count of product from cart
    const increaseQuantity = (product)=>{
        setcartProducts(cartProducts.map((item)=>
            item.id===product.id?
                {...item,count:item.count+1}:{...item}
        
        ))
          updateCart(product,false)
      }

      //function to update cart
        const updateCart = (product,decrease)=>{
          const response = localStorage.getItem("cartProducts")
          if(response){
            const cart = JSON.parse(response);
            cart[product.id]=decrease?cart[product.id]-1:cart[product.id]+1;
            localStorage.setItem("cartProducts",JSON.stringify(cart))
          }
          else{
              return [];
          }
        }
            // let cart = localStorage.getItem("cartProducts");
            // if(!cart){
            //   cart = []
            // }
            // else{
            //   cart = JSON.parse(cart)
            // }
            // if(cart[id]==null){
            //   cart[id]=1;
            // }
            // else{
            //   cart[id]= cart[id]+1;
            // }
            // localStorage.setItem("cartProducts",JSON.stringify(cart));
    let cartTotal = 0;
    return (
        cartProducts &&
        <>
        <h4 className="bg-warning text-center text-primary p-2 position-fixed w-100" style={{top:"4.7rem"}}>Cart</h4>
        <div className='mx-auto row justify-center m-5'>
            {cartProducts.map((product)=>{
             cartTotal += parseFloat((product.price * product.count).toFixed(2))
                return <>
                <div
              value={product.id}
              className="single-product inline-block col-12 col-sm-6 col-md-4 col-lg-3 bg-white d-flex flex-column align-items-center justify-content-end border-2 border border-info rounded-3"
              
            >
            <Link to={"/details/" + product.title}  className="d-flex flex-column text-center justify-content-around h-100 text-decoration-none p-3" onClick={()=>{props.setProductId(product.id )}}  >

              <img
                value={product.id}
                src={product.image}
                style={{ width: "calc(5rem + 40%)",height:"50%"}}
                alt=""
                className="mx-auto"
              />
              <div className="d-flex flex-column w-100">
              <h6
                value={product.id}
                className="inline-block text-primary"
                
              >
                {product.title}
              </h6>
              <h4
                value={product.id}
                className=""
    
              >
               <span className='fs-6'>Total</span> ${parseFloat(product.price * product.count,5).toFixed(2)}
              </h4>
              </div>
              </Link>
              <div className='d-flex align-items-center mb-3'>
              <button className='btn btn-danger d-flex mx-1' onClick={()=>decreaseQuantity(product)}><span class="material-symbols-outlined">remove</span></button>
              <span>Quantity {product.count}</span>
              <button className='btn btn-success d-flex mx-1' onClick={()=>increaseQuantity(product)}><span class="material-symbols-outlined">add</span></button>
              </div>
            </div>
              </>
            })
          }
            <div className='d-flex justify-content-around flex-column text-center'>
          <h4 className='mt-4'> {parseFloat(cartTotal.toFixed(2))>0?"Cart Total $" + parseFloat(cartTotal.toFixed(2)):"Nothing in cart"}</h4>
          {parseFloat(cartTotal.toFixed(2))>0 && <button className='btn btn-warning mx-auto' style={{width:"calc(10rem + 10vw)"}}>Continue to Buy</button>}
          </div>
        </div>
        </>
    );
}

export default Cart;