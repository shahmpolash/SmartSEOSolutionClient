import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);


  return (

    <>




      {
        about.map(c=> <section id="about" className="about-section about-two bg-thin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="about-img">
                <img src='https://i.postimg.cc/pTNPTMP2/Add-a-subheading-2.png' alt />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ptb-100">
              <div className="section-title">
                <h2>Comparing Costs: SEO vs. Google Ads, Facebook Ads, Others</h2>
              </div>
              <div className="about-text-blc">
                <p>Discover cost-effectiveness between SEO and various platforms like Google Ads and Facebook Ads, ensuring maximum return on investment.</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-feature-blc">
                    <i className="envy envy-quality blue" />
                    <div className="about-feature-content">
                      <h6>FB Ads</h6>
                      <p>Facebook Ads can be costly with unpredictable results. Ad fatigue, audience saturation, and limited targeting options may hinder effectiveness, impacting ROI and overall campaign success.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="about-feature-blc">
                    <i className="envy envy-quality red" />
                    <div className="about-feature-content">
                      <h6>Google Ads</h6>
                      <p>Google Ads can be expensive, especially for competitive keywords. Click fraud, low-quality traffic, and complex campaign management can increase costs and decrease ROI for advertisers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-btn">
                <a href={c.buttonLink} className="btn btn-solid">{c.buttonText} <i className="envy envy-right-arrow" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>)
      }

      



    </>
  );
};

export default AboutUsSection;
