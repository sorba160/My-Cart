import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Guranteed</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Furniture</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Appliences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Packages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">FAQ</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn " type="submit" style={{ backgroundColor: "#ef4423", color: "white" }}><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ marginLeft: "10%" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#" style={{ color: "#ef4423" }}>cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="subnav">
                <p><span style={{
                    color: "#ef4423",
                    borderBottom: "2px solid #ef4423"}}>CART</span><span style={{color:"#adadad"}}>---DELIVERY---PAYMENT</span></p>
        </div>
        </div >
    )
}

export default Navbar
