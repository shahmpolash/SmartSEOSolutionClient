import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://smartseosolution-f3192830bfae.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (
   
    <>

      {/* Start home banner area */}
      {
        banners.map(banner => <div id="home" className="home-banner-area banner-type-three bg-thin">
         
            <div className="container">
              <div className="banner-content">
                <h1> {banner.bannerHeading}</h1>
                <p>
                {banner.bannerDetails}
                </p>
                <div className="cta-btn">
                <a href={banner.buttonOneLink} className="btn btn-solid" style={{ textDecoration: 'blink' }} target="_blank">{banner.buttonOneText}</a>
                <a href={banner.buttonTwoLink} className="btn btn-solid" style={{ textDecoration: 'blink' }} target="_blank">{banner.buttonTwoText}</a>
                 
                </div>
                <div className="banner-img">
                  <img src={banner.bannerImage} />
                  <div className="banner-img-left">
                    <img src="assets/img/banner/left_plant.png" alt />
                  </div>
                  <div className="banner-img-right">
                    <img src="assets/img/banner/right-plant.png" alt />
                  </div>
                </div>
              </div>
            </div>
            
            
          
        </div>)
      }


      {/* end hero section*/}



    </>
  );
};

export default Banner;
