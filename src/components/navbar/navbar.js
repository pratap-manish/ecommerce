import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
function Navbar(props) {
    const navigate = useNavigate();
    return (
        <div className='bg-info p-3 position-sticky top-0 d-flex justify-content-between align-items-center'>
            <Link to="/" className='fs-3 text-decoration-none' title="Home" style={{color:"#632cb3;!important"}}>amazan.in</Link>
            <div>
            <button id="targetButton" className='btn'></button>
            <Link to="/cart"  className='btn btn-primary me-3'><span className="material-symbols-outlined">shopping_cart</span></Link>
            </div>
        </div>
    );
}

export default Navbar;