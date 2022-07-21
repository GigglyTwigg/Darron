

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ara725p', 'template_helfars', form.current, "G2N2-NYrd_d_NrdVh")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

      <div>
      <br/>
      <div class="content">
      <br/>
      <div class="container">
          <h1>CONTACT ME!!!</h1>
          <br />

          <br/>
      <div class="row align-items-stretch no-gutters contact-wrap">
      <br/>
      <div class="col-md-6">
      <br/>
      <div class="form h-100">

      <h3>Send a message</h3>
      <form class="mb-5"  id="contact-form" name="contact-form" novalidate="noValidate"ref={form} onSubmit={sendEmail}>

      <div class="row">
      <div class="col-md-6 form-group mb-5">
      <label for="" class="col-form-label">Name *</label>
      <input type="text" class="form-control" name="user_name" id="name" placeholder="Your name"/>
      </div>

      <div class="col-md-6 form-group mb-5">
      <label for="" class="col-form-label">Email *</label>
      <input type="text" class="form-control" name="user_email" id="email" placeholder="Your email"/>
      </div>

      </div>


      <div class="row">
      <div class="col-md-6 form-group mb-5">
      <label for="" class="col-form-label">Phone</label>
      <input type="text" class="form-control" name="user_phone" id="phone" placeholder="Phone #"/>
      </div>


      <div class="col-md-6 form-group mb-5">
      <label for="" class="col-form-label">Company</label>
      <input type="text" class="form-control" name="user_company" id="company" placeholder="Company  name"/>
      </div>

      </div>

      <div class="row">
      <div class="col-md-12 form-group mb-5">
      <label for="message" class="col-form-label">Message *</label>
      <textarea class="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
      </div>

      </div>

      <div class="row">
      <div class="col-md-12 form-group">
      <input type="submit" value="Send Message" class="btn btn-dark rounded-0 py-2 px-4" />
      <span class="submitting"></span>
      </div>

      </div>
      </form>

      </div>
      <div className="col-md-6 ls-12 contactme">
      <div className="contact-info h-100" >
      </div>
      </div>
      </div>

      <div className="contactme1 contactme ">
            <h3>Or contact me:</h3>
      <p>Email: darronmgordon@gmail.com </p>
      </div>
      </div>
      </div>
      </div>
      </div>
  //  </form>
  );
};

export default ContactForm;
