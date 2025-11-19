"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./form.css"
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
   const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const sendMail = (event) => {
    event.preventDefault(); // Prevent form submission
   setLoading(true);

    emailjs.sendForm("service_3oroltp", "template_em09fcj", event.target, "1GnXK_62bhrugUB_l")
      .then(() => {
        toast.success("Message sent successfully! 🎉"); 
           setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error sending email:", error); // Log error if any
        setLoading(false);
      });
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={sendMail}>
        <div className="input-box">
          <div className="input-field">
            <input type="text" id="name" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" id="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
            <span className="focus"></span>
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input type="number" id="phone" name="phone" placeholder="Mobile Number" required value={formData.phone} onChange={handleChange} />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" id="subject" name="subject" placeholder="Email Subject" required value={formData.subject} onChange={handleChange} />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea id="message" name="message" cols="30" rows="10" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
          <button type="submit" className="btn" disabled={loading}> {loading ? "Sending..." : "Submit"}</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
