import React from 'react';
import grill from "../assets/grill.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${grill})` }}></div>
        <div className='rightSide'>
            <h1> CONTACT US</h1>
            <form id="contact-form" method='Post'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name...' type="text"/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Email...' type="email"/>
                <label htmlFor='message'>Contact us for any further questions!</label>
                <textarea rows="6" placeholder="Questions.." name="message" required></textarea>
                <button type='submit'>Send message</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;