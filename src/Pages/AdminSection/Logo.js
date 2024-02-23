import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Logo = () => {


    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/logo`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);



    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;



        const logoSection = {
            logo,


        };

        const url = `https://smartseosolution-f3192830bfae.herokuapp.com/add-logo`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Logo is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mt-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Your Logo</h2>

                            {
                                logo.length === 1 &&
                                <>
                                    {
                                        logo.map(c =>
                                            logo.map(c =>
                                                <Link className='btn btn-solid' to={`/edit-logo/${c._id}`}> Please Edit Your Logo</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                logo.length === 0 &&

                                <form class="contact-form " onSubmit={handleLogo}>
                                    <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="logo"  placeholder="Submit Logo" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s">Update Your Logo</button>
                                        </div>
                                    </div>

                                </form>
                            }

                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default Logo;