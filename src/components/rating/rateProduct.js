import React, { useEffect, useState } from 'react';

function RateProduct(props) {
    useEffect(() => {
        const ratingArray = [false,false,false,false,false]
        for(let i=0;i<Math.round(props.product.rating.rate);i++){
           ratingArray[i] = 1;
        }
        setrating(ratingArray)
        return () => {
            
        };
    }, []);
const [rating, setrating] = useState();
    return (rating &&
        <div>
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
    );
}

export default RateProduct;