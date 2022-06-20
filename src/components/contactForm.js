// import React, {useState} from "react";
// // export default class extends React.Component {
// //   constructor(props) {
// // 	super(props);
// // 	this.state = { feedback: '', name: 'Namessss', email: 'email@example.com' };
// // 	this.handleChange = this.handleChange.bind(this);
// // 	this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //
// //   render() {
// // 	return (
// //   	<form className="test-mailing">
// //     	<h1>Let's see if it works</h1>
// //     	<div>
// //       	<textarea
// //         	id="test-mailing"
// //         	name="test-mailing"
// //         	onChange={this.handleChange}
// //         	placeholder="Post some lorem ipsum here"
// //         	required
// //         	value={this.state.feedback}
// //         	style={{width: '100%', height: '150px'}}
// //       	/>
// //     	</div>
// //     	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
// //   	</form>
// // 	)
// //   }
// //
// //   handleChange(event) {
// //     this.setState({feedback: event.target.value})
// //   }
// //
// //
// //
// // handleSubmit (event) {
// // const templateId = 'template_helfars';
// //
// // this.sendFeedback(templateId, {message_html: "Kvoth is cute af", from_name: this.state.name, reply_to: this.state.email})
// // }
// //
// // sendFeedback (templateId, variables) {
// // window.emailjs.send(
// //   'service_ara725p', templateId,
// //   variables
// //   ).then(res => {
// //     console.log('Email successfully sent!')
// //   })
// //   // Handle errors here however you like, or use a React error boundary
// //   .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
// // }}
// function ContactForm(){
//
//          window.onload = function() {
//              document.getElementById('contact-form').addEventListener('submit', function(event) {
//                  event.preventDefault();
//                  // generate a five digit number for the contact_number variable
//                  this.contact_number.value = Math.random() * 100000 | 0;
//                  // these IDs from the previous steps
//                  emailjs.sendForm('contact_service', 'contact-form', this)
//                      .then(function() {
//                          console.log('SUCCESS!');
//                      }, function(error) {
//                          console.log('FAILED...', error);
//                      });
//              });
//          }
//
//   return<div>
// <div class="content">
// <div class="container">
// <div class="row align-items-stretch no-gutters contact-wrap">
// <div class="col-md-6">
// <div class="form h-100">
//
// <h3>Send us a message</h3>
// <form class="mb-5"  id="contact-form" name="contact-form" novalidate="noValidate">
//
// <div class="row">
// <div class="col-md-6 form-group mb-5">
// <label for="" class="col-form-label">Name *</label>
// <input type="text" class="form-control" name="name" id="name" placeholder="Your name"/>
// </div>
//
// <div class="col-md-6 form-group mb-5">
// <label for="" class="col-form-label">Email *</label>
// <input type="text" class="form-control" name="email" id="email" placeholder="Your email"/>
// </div>
//
// </div>
//
//
// <div class="row">
// <div class="col-md-6 form-group mb-5">
// <label for="" class="col-form-label">Phone</label>
// <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone #"/>
// </div>
//
//
// <div class="col-md-6 form-group mb-5">
// <label for="" class="col-form-label">Company</label>
// <input type="text" class="form-control" name="company" id="company" placeholder="Company  name"/>
// </div>
//
// </div>
//
// <div class="row">
// <div class="col-md-12 form-group mb-5">
// <label for="message" class="col-form-label">Message *</label>
// <textarea class="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
// </div>
//
// </div>
//
// <div class="row">
// <div class="col-md-12 form-group">
// <input type="submit" value="Send Message" class="btn btn-dark rounded-0 py-2 px-4" />
// <span class="submitting"></span>
// </div>
//
// </div>
// </form>
//
// </div>
// <div class="col-md-6">
// <div class="contact-info h-100" >
// <a href="https://www.google.com/maps" target="_blank"></a>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// }

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
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />

      <div>
      <div class="content">
      <div class="container">
      <div class="row align-items-stretch no-gutters contact-wrap">
      <div class="col-md-6">
      <div class="form h-100">

      <h3>Send us a message</h3>
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
