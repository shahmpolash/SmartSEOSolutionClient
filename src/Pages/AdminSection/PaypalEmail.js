import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PaypalEmail = () => {

    const [paypal, setPaypal] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/paypal-email/${id}`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);


    const handleUpdatePaypal = (event) => {
        event.preventDefault();
        const paypalEmail = event.target.paypalEmail.value;

        const PaypalEmailUpdate = {
            paypalEmail,
        };

        const url = `https://smartseosolution-f3192830bfae.herokuapp.com/paypal-email/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(PaypalEmailUpdate),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Paypal Email Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">

                            <form class="contact-form " onSubmit={handleUpdatePaypal}>
                                <div class="row">
                                   
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="paypalEmail" defaultValue={paypal.paypalEmail} placeholder="Paypal Email" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s"> Update Now</button>
                                    </div>
                                </div>

                            </form>










                        </div>




                    </div>
                </div>
            </section>
        </>
    );
};

export default PaypalEmail;