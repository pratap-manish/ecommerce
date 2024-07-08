import React from 'react';
import './loader.css'
function Loader(props) {
    return (
        props.isloading &&
        <div style={{height:"100%"}} className='bg-secondary position-absolute w-100 opacity-50'>
        <div className='loader w-100'>
        <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
</div>
    );
}

export default Loader;