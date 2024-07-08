import React, { useEffect, useState } from 'react';
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
      const products = [...cartProducts];
      const newProducts = products.filter((item) => {return item.id !== product.id}
      )
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
    let cartTotal = 0;
    return (
        cartProducts &&
        <>
        {/* <h4 className="bg-black text-center text-primary p-2 position-fixed w-100" style={{top:"4.7rem"}}>Cart</h4> */}
        <div className='mx-auto row justify-center mt-2 bg-white mx-0 mx-sm-2'>
            {cartProducts.map((product)=>{
             cartTotal += parseFloat((product.price * product.count).toFixed(2))
                return <div className="p-0 p-sm-1 col-6 col-md-4 col-lg-3">
                <div
              value={product.id}
              className="inline-block bg-white d-flex flex-column align-items-center justify-content-end border-2 border border-maintexttheme rounded-3 h-100"
              
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
                className="inline-block text-darkyellow"
                
              >
                {product.title}
              </h6>
              <h4
                value={product.id}
                className="text-dark"
    
              >
               <span className='fs-6 text-darkyellow'>Total</span> ${parseFloat(product.price * product.count,5).toFixed(2)}
              </h4>
              </div>
              </Link>
              <div className='d-flex align-items-center mb-3'>
              <button className='btn btn-outline-dark d-flex mx-1' onClick={()=>decreaseQuantity(product)}><span class="material-symbols-outlined">remove</span></button>
              <span>Quantity {product.count}</span>
              <button className='btn btn-dark d-flex mx-1' onClick={()=>increaseQuantity(product)}><span class="material-symbols-outlined">add</span></button>
              </div>
            </div>
            </div>
            })
          }
            <div className='d-flex justify-content-around flex-column text-center mb-4'>
          <h4 className='mt-4'> {parseFloat(cartTotal.toFixed(2))>0?"Cart Total $" + parseFloat(cartTotal.toFixed(2)):"Cart is Empty"}</h4>
          {parseFloat(cartTotal.toFixed(2))>0 && <button className='btn btn-dark mx-auto' style={{width:"calc(10rem + 10vw)"}}>Continue to Buy</button>}
          </div>
        </div>
        </>
    );
}

export default Cart;