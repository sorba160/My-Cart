import React from 'react'
import { useState } from 'react'
import './Placeorder.css'



function PlaceOrder() {
  
   let [modal,setModal] = useState("none")
     
    

    return (
        <div>
            <div className="card " style={{
                marginLeft: "10%",width:"120%" , boxShadow: "0 2px 40px 0 rgba(0, 0, 0, 0.09)"
            }} >
                <div className="card-body w-100">
                    <h5 className="card-title my-2" style={{ textAlign:"center", backgroundColor: "rgb(233, 232, 232)", padding: "2px 10px", color: " #ef4423", width: "100%" }}><i className="fas fa-gift" style={{ marginRight: "10%" }}></i>Have a promo code?</h5>
                    <table className="table table-borderless">

                        <tbody >

                            <tr >

                                <td colSpan="2" className="table">Monthly Rent</td>
                                <td>Rs3050</td>
                            </tr>
                            <tr>

                                <td colSpan="2" className="table">Security Deposit</td>
                                <td>Rs6799</td>
                            </tr>
                            <tr>

                                <td colSpan="2" className="table">GST</td>
                                <td>Rs300</td>
                            </tr>
                            <tr>

                                <td colSpan="2" className="table">Coupon Discount</td>
                                <td style={{ color: "#ef4423" }}>-Rs 2789</td>
                            </tr>
                            <tr>

                                <td colSpan="2" className="table">Delivery</td>
                                <td style={{ color: "#3dbdb6" }}>Free</td>
                            </tr>

                            <hr style={{ width: "120%" }} />

                            <tr>

                                <td colSpan="2" className="table ">Total Payble</td>
                                <td >Rs 30,000</td>
                            </tr>

                        </tbody>
                    </table>
                    <button onClick={()=>setModal(modal="block")} type="button" className="btn btn-danger btn-lg" style={{ marginTop: "-20px" }}>Place Order</button>
                    <p id="modalWarning" style={{ textAlign: "right", display:modal,margin:0 }}>no items have selected  </p>
                </div>
            </div>
        </div >
    )
}

export default PlaceOrder
