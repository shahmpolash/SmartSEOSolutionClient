import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (

    <>
    
      {
        service.map(e=><section className="feature-section pt-100 bg-thin " id="services-sec" >
        <div className="container">
          <div className="section-title">
            <h2>{e.serviceHeading}</h2>
            <p>{e.servicesubHeading}</p>
          </div>
          <div className="row pt-70">
            {
              items.map(c=><div className="col-lg-4 col-md-6 col-sm-12 pb-70">
              <div className="item-single">
                <div className="icon">
               
                <i><img src={c.serviceIcon} alt="icon_shape" /></i>
                
                  <div className="icon-bg">
                    <img src="assets/img/resource/icon_shape_b1.png" alt="icon_shape" />
                  </div>
                </div>
                <div className="item-content">
                  <h6><a href="/">{c.serviceTitle}</a></h6>
                  <p>{c.serviceDetails}</p>
                  
                </div>
              </div>
              
            </div> )
            }
            
           
            
           
            
           
          </div>
        </div>
      </section> )
      }

      



    </>


  );
};

export default ServicesSection;
