import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
function Navbar(props) {
    const navigate = useNavigate();
    return (
        <div className='bg-maintheme p-3 position-sticky top-0 d-flex justify-content-between align-items-center'>
            <Link to="/" className='fs-3 fw-bold text-decoration-none text-maintexttheme' title="Home">amazan.in</Link>
            <div className="w-100 d-flex">
                <select className="w-25 form-control">
                    <option>All</option>
                </select>
                <input placeholder="search Amazon" className="w-100 form-control" />
                <div className="search-icon">
                <span className="material-symbols-outlined">search</span>
                </div>
            </div>
            <div>
            <button id="targetButton" className='btn'></button>
            <Link to="/cart"  className='btn btn-maintexttheme me-3'><span className="material-symbols-outlined">shopping_cart</span></Link>
            </div>
        </div>
    );
}

export default Navbar;