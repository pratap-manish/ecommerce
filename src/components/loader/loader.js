import React from 'react';
import './loader.css'
import $ from 'jquery';
function Loader(props) {
    if(props.isloading){
        $("body").css("overflow","hidden")
    }
    else{
        $("body").css("overflow","auto")
    }
    return (
        props.isloading &&
        // <div style={{height:"100%"}} className='bg-secondary position-absolute w-100 opacity-50'>
        <div className='loader d-flex justify-content-center position-absolute bg-maintexttheme'>
        <div className="spinner-border text-white position-absolute" style={{width: "3rem", height: "3rem",top:"50%"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
// </div>
    );
}

export default Loader;