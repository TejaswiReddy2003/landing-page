const ContactForm = () => {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  