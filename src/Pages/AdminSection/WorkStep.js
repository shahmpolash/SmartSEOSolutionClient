import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const WorkStep = () => {

    const [stepwork, setWork] = useState([]);

    useEffect(() => {
        fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/worksec`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, []);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const workTitle = event.target.workTitle.value;
        const stepOne = event.target.stepOne.value;
        const stepTwo = event.target.stepTwo.value;
        const stepThree = event.target.stepThree.value;
        const stepFour = event.target.stepFour.value;
        


        const workSection = {
            workTitle,
            stepOne,
            stepTwo,
            stepThree,
            stepFour

        };

        const url = `https://smartseosolution-f3192830bfae.herokuapp.com/add-worksec`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Work Step is Updated');
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
                                <h2>Update Work Section</h2>

                                {
                                    stepwork.length === 1 &&
                                    <>
                                        {
                                            stepwork.map(c =>
                                                stepwork.map(c =>
                                                    <Link className='btn btn-solid' to={`/edit-work/${c._id}`}> Update Work Step</Link>)
                                            )
                                        }
                                    </>
                                }
                                {
                                    stepwork.length === 0 &&

                                    <form class="contact-form " onSubmit={handleBannerSection}>
                                        <div class="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="workTitle" placeholder="Section Title" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="stepOne" placeholder="Step One Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="stepTwo" placeholder="Step Two Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="stepThree" placeholder="Step Three Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="stepFour" placeholder="Step Four Text" required />
                                                </div>
                                            </div>
                                            
                                            

                                            <div class="slider-btn">
                                                <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s">Add Work Step</button>
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

export default WorkStep;