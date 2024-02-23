import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
    <>
     
      <section className="client-section testimonial ptb-100">
        <div className="container">
          {
            testimonialtext.map(text => <div className="section-title pb-5">
              <p>{text.testimonialText}</p>
              <h2>{text.testimonialHeading}</h2>
              
            </div>)
          }


          <div className="row align-items-center">
            <div className="col-lg-4">
              {/* <div className="clients-img">
                <img src="assets/img/clients/client_1.png" alt="client-1" />
                <img src="assets/img/clients/client_2.png" alt="client-2" />
                <img src="assets/img/clients/client_3.png" alt="client-3" />
                <img src="assets/img/clients/client_4.png" alt="client-4" />
                <img src="assets/img/clients/client_5.png" alt="client-5" />
              </div> */}
            </div>
          
              

            </div>
            <div className="col-lg-12 d-flex ">
              {
                testimonial.map(e=> <div className="slider-item card m-2 p-5">
                <div className="qoute-icon">
                  <img src="assets/img/resource/quotation_1.png" alt="quotation" />
                </div>
                <div className="inner-text">
                  <p>
                  {e.desc}
                  </p>
                </div>
                {/* slider Image */}
                <div className="client">
                  <div className="client-img">
                    <img src={e.image} alt="client-1" />
                  </div>
                  <div className="client-info">
                    <h6>{e.personName}</h6>
                    <span>{e.personTitle}</span>
                  </div>
                </div>
              </div>)
              }
              


            
            


            </div>
            
          </div>
        
        <div className="shape">
          <img src="assets/img/resource/shape_6.png" alt="shape" className="shape-inner" />
          <img src="assets/img/resource/Ellipse_1.png" alt="shape" className="shape-inner" />
          <img src="assets/img/resource/Rectangle_1.png" alt="shape" className="shape-inner" />
          <img src="assets/img/resource/Ellipse_1.png" alt="shape" className="shape-inner" />
          <img src="assets/img/resource/Rectangle_1.png" alt="shape" className="shape-inner" />
          <img src="assets/img/resource/shape_2.png" alt="shape" className="shape-inner" />
        </div>
      </section>

    </>
  );
};

export default TestimonialSection;
