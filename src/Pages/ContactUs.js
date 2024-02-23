import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
 
  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const emailAddress = event.target.emailAddress.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      fullName,
      emailAddress,
      subject,
      message,
      messageStatus,

    };

    const url = `https://smartseosolution-f3192830bfae.herokuapp.com/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/all-messages');
        alert('Message is Updated');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (



    <>
      <div>
        <div className="page-title-area bg-thin">
          <div className="container">
            <div className="page-title-content">
              <h1>Contact</h1>
              <ul>
                <li className="item"><a href="index.html">Home</a></li>
                <li className="item"><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="shape">
            <span className="shape1" />
            <span className="shape2" />
            <span className="shape3" />
            <span className="shape4" />
          </div>
        </div>
        {/* end page title area */}
        <section className="contact-section ptb-100 bg-thin">
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch</h2>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm-12">
                <form onSubmit={handleMessage} id="contactForm">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control" id="fullName" required data-error="Please enter your name" placeholder="Name" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" id="emailAddress" required data-error="Please enter your email" placeholder="Email" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input type="text" name="subject" className="form-control" id="subject" required data-error="Please enter your phone number" placeholder="Subject" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input type="text" name="messageStatus" className="form-control"  hidden value='UnRead' />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea name="message" id="message" className="form-control" cols={30} rows={6} required data-error="Please enter your message" placeholder="Message..." defaultValue={""} />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <div className="form-check agree-label">
                          
                          <div className="help-block with-errors gridCheck-error" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-solid">send message</button>
                      <div id="msgSubmit" className="h5 text-center hidden" />
                    </div>
                  </div>
                </form>
              </div>
              {
                footerAddress.map(a=><div className="col-lg-4 col-sm-12">
                <div className="contact-widget">
                  <div className="info-title">
                    <h5>contact info</h5>
                  </div>
                  <div className="contact-info">
                    <i className="envy envy-pin" />
                    <p>{a.footeraddress}</p>
                  </div>
                  <div className="contact-info">
                    <i className="envy envy-call" />
                    <p>
                    {a.footerPhone}
                    </p>
                    
                  </div>
                  <div className="contact-info">
                    <i className="envy envy-plane" />
                    <p>
                    {a.footerEmail}
                    </p>
                  </div>
                </div>
              </div> )
              }
              
            </div>
            <div className="row">
             
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default ContactUs;