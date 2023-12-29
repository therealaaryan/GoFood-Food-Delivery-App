import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {/* Render My Orders link only if authToken is present */}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/myorders">My Orders</Link>
                </li>
              )}
            </ul>
            <div className='d-flex'>
              {
                !isLoggedIn ? (
                  <>
                    <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                    <Link className="btn bg-white text-success mx-1" to="/createuser">Sign Up</Link>
                  </>
                ) :
                  <div>

                    <div className='btn bg-white text-success mx-2'>
                      My Cart
                    </div>
                    <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                      Logout
                    </div>

                  </div>


              }

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

