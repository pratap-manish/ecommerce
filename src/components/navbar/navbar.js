import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
function Navbar(props) {
    const navigate = useNavigate();
    return (
        <div style={{zIndex:"10"}} className='bg-black p-3 position-sticky top-0 d-flex justify-content-between align-items-center'>
            <Link to="/" className='fs-3 fw-bold text-decoration-none text-maintheme' title="Home">amazan.in</Link>
            <div className="w-100 d-flex gap-1 w-md-75 w-50 flex-sm-row flex-row-reverse m-1">
                {/* <select className="w-25 form-control">
                    <option>All</option>
                </select> */}
                <input placeholder="search Amazon" className="w-100 form-control d-none d-sm-block" />
                <div className="d-flex align-items-center btn btn-outline-maintheme border-0">
                <span className="material-symbols-outlined float-right">search</span>
                </div>
            </div>
            <div>
            <button id="targetButton" className='btn'></button>
            <Link to="/cart"  className='btn btn-outline-maintheme me-3'><span className="material-symbols-outlined">shopping_cart</span></Link>
            </div>
        </div>
    );
}

export default Navbar;