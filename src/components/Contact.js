import React, { Component } from 'react';
import {
    Redirect
  } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect:false,
            field_name:"",
            field_email:"",
            field_phone:"",
            field_message:""
        }
    }

    isChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      // console.log(event.target.value);
      this.setState({
        [field] : value
      });
    }

    getData = () => {
      var data = "";
      data += "Name: " + this.state.field_name;
      data += " / Email: " + this.state.field_email;
      data += " / Phone: " + this.state.field_phone;
      data += " / Message: " + this.state.field_message;
      return data;
    }
    
    submitForm = (event) => {
        event.preventDefault();
        this.setState({isRedirect:true});
        
    }
    render() {
        if (this.state.isRedirect === true){
          console.log(this.getData());
            return <Redirect to="/" />;
            
        }
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Contact</h1>
                      {/* <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Begin contact */}
            <section id="contact">
              <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <hr className="star-dark mb-5" />
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                    {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label style={{float:'left'}}>Name</label>
                          <input onChange={(event) => this.isChange(event)} name="field_name" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label style={{float:'left'}}>Email Address</label>
                          <input onChange={(event) => this.isChange(event)} name="field_email" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label style={{float:'left'}}>Phone Number</label>
                          <input onChange={(event) => this.isChange(event)} name="field_phone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label style={{float:'left'}}>Message</label>
                          <textarea onChange={(event) => this.isChange(event)} name="field_message" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <br />
                      <div id="success" />
                      <div className="form-group">
                        <button type="submit" onClick={(event)=> {this.submitForm(event)}} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* End contact */}
          </div>
          
        );
    }
}

export default Contact;