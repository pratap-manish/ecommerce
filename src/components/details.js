import React ,{useState, useEffect} from 'react';
import { useHistory ,useLocation } from 'react-router-dom';
import products from './products.json'
import apicalls from '../apicalls';
function Details(props) {
    useEffect(() => {
        const getData = async()=>{
            try {
                const response = await apicalls.Get("https://fakestoreapi.com/products/" + props?.productId)
                setproduct(response)
                console.log(response);
                    const rating = [false,false,false,false,false]
                    for(let i=0;i<Math.round(response.rating.rate);i++){
                       rating[i] = 1;
                    }
                    setrating(rating)
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
        return () => {
            
        };
    }, []);
    const [product, setproduct] = useState();
    const [rating, setrating] = useState();

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
        product &&          
                    <div className='d-flex' >
                        <div className='d-flex flex-column p-3'>
                        <img style={{"width":"20rem"}} src={product.image} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                        <h2 className='p-2 bg-light m-2 mb-0'>{product.title}</h2>
                        {/* <h5 className='p-2 bg-light m-2'>{product.category}</h5> */}
                        <h4 className='p-2 bg-light m-2 fs-5'>{product.description}</h4>
                        <h4 className='p-2 bg-light m-2 fs-1'> $ {product.price}</h4>
                        <div className='inline ms-3 mb-3'>
                        {rating.map((each,index)=>
                        
                             (<> {rating[index] && <svg xmlns="http://www.w3.org/2000/svg" fill="orange" width={"20px"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-1 ">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                           </svg>
                           }
                                    {!rating[index] && <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={"20px"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                        </svg>
}
                                    </>
                        )
                        )}     
                        </div>
                        <button className='btn btn-warning m-1' style={{width:"calc(10rem + 10vw)"}} >Buy Now</button>                   
                        <button className='btn btn-secondary m-1' style={{width:"calc(10rem + 10vw)"}} onClick={()=>addToCart(product.id)}>Add To cart</button>                   
                        {/* <span className="material-symbols-outlined  fs-5">star_rate star_rate</span> */}
                        {/* <h5 className='p-2 bg-light m-2'> Rated {product.rating.rate}/5 by {product.rating.count} customers</h5> */}
                        </div>
                    </div>
             
    );
}

export default Details;{}