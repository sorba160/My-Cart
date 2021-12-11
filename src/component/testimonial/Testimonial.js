import React from 'react'
import './Testimonial.css'
function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <div className="testimonials T1">
                    <i className="fas fa-cart-arrow-down" ></i>
                    <h4> Most Affordable</h4>
                    <p>Find the Best exclusive range <br/> of products</p>
                </div>



                <div className="testimonials T2">
                <i className="fas fa-tools"></i>
                    <h4>Free Service</h4>
                    <p>Find the Best exclusive range <br/> of products</p>


                </div>

                <div className="testimonials T3">
                <i className="fas fa-bolt"></i>
                    <h4> Free Delivery</h4>
                    <p>Find the Best exclusive range <br/> of products</p>
                </div>

            </div>
        </>
    )
}

export default Testimonial
