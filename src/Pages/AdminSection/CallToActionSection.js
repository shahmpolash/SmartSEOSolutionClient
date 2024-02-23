import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const CallToActionSection = () => {

    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, []);


    const handleActionSection = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const subHeading = event.target.subHeading.value;
        



        const actionSection = {
            heading,
            subHeading,
           


        };

        const url = `https://smartseosolution-f3192830bfae.herokuapp.com/add-action`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(actionSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Action is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2>Update Call To Action </h2>

                                {
                                    action.length === 1 &&
                                    <>
                                        {

                                            action.map(c =>
                                                <Link className='btn btn-solid' to={`/edit-call/${c._id}`}> Edit Call To Action</Link>)

                                        }
                                    </>
                                }
                                {
                                    action.length === 0 &&

                                    <form class="contact-form " onSubmit={handleActionSection}>
                                        <div class="row">

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="heading" placeholder="Heading" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="subHeading" placeholder="Details" required />
                                                </div>
                                            </div>
                                            <div class="slider-btn">
                                                <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s">Add Call To Action</button>
                                            </div>
                                        </div>

                                    </form>
                                }


                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default CallToActionSection;