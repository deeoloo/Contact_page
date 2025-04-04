import { useState } from "react";
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Thank you for your message, ${formData.name}! We will contact you via ${formData.contactMethod}.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactMethod: 'email',
      message: ''
    });
  };

  return (
    <div className="page-container">
      {/* Left side - Contact Info */}
      <div className="contact-info-section">
        <h1>Contact Us</h1>
        <p>Have questions or need help?...</p>
      </div>

      {/* Right side - Form Card */}
      <div className="form-card">
        <div className="contact-form">
          <p>Send us a message</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>

            <div className="form-group">
              <p>Preferred contact method of communication</p>
              <div className="contact-method-options">
                {['email', 'phone'].map((method) => (
                  <label key={method} className="radio-option">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                    />
                    <span>{method.charAt(0).toUpperCase() + method.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;