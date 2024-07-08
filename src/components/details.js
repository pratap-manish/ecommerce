import React ,{useState, useEffect} from 'react';
import apicalls from '../apicalls';
import RateProduct from './rating/rateProduct';
function Details(props) {
    useEffect(() => {
        const getData = async()=>{
            try {
                const response = await apicalls.Get("https://fakestoreapi.com/products/" + props?.productId)
                setproduct(response)
                // console.log(response);
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
                    <div className='d-flex flex-md-row flex-column mx-0 mx-sm-2 bg-white' >
                        <div className='d-flex flex-column p-3 mx-auto bg-white' style={{ width: "calc(3rem + 50%)"}}>
                        <img style={{ width: "calc(3rem + 65%)",maxHeight:"70%"}} className='align-self-center' src={product.image} alt="" />
                        </div>
                        <div className='d-flex flex-column bg-maintheme'>
                        <h2 className='p-2 m-2 mb-0 text-darkyellow'>{product.title}</h2>
                        {/* <h5 className='p-2 bg-light m-2'>{product.category}</h5> */}
                        <h4 className='p-2 m-2 fs-6'>{product.description}</h4>
                        <h4 className='p-2 m-2 fs-1'> $ {product.price}</h4>
                        <div className='inline ms-3 mb-3'>
                        <RateProduct product={product} />  
                        <h6 className='mt-1 text-darkyellow'>{product.rating.count} ratings</h6>
                        </div>
                        <button className='btn btn-maintexttheme m-1 shadow-none' style={{width:"calc(10rem + 10vw)"}} >Buy Now</button>                   
                        <button className='btn btn-outline-maintexttheme m-1 shadow-none' style={{width:"calc(10rem + 10vw)"}} onClick={()=>addToCart(product.id)}>Add To cart</button>                   
                        {/* <span className="material-symbols-outlined  fs-5">star_rate star_rate</span> */}
                        {/* <h5 className='p-2 bg-light m-2'> Rated {product.rating.rate}/5 by {product.rating.count} customers</h5> */}
                        </div>
                    </div>
             
    );
}

export default Details;{}