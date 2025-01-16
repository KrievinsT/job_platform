import React from 'react';
import { Phone, Mail } from 'lucide-react';
import './Contact.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="contact">
        <div className="contact__container">
          <div className="contact__content">
            {/* Map Section */}
            <div className="contact__map-section">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5787093243374!2d4.894091776941793!3d52.37232097209738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c70ba3e681%3A0x1ce3c1d2b6d62f85!2sAmsterdam%20Centraal!5e0!3m2!1sen!2sus!4v1705355161043!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-allowed"
              ></iframe>
            </div>

            {/* Contact Info Section */}
            <div className="contact__info-section">
              <div className="contact__info-content">
                <h1>Contact Us</h1>
                <p className="contact__description">
                  Become our team member, apply for the job post today and send us your detailed CV.
                </p>

                <div className="contact__info-box">
                  <h2>Headquarter office</h2>
                  <div className="contact__address">
                    <p>Storkower Strasse 41</p>
                    <p>Rheinland-Pfalz</p>
                    <p>56379</p>
                    <div className="contact__location">
                      <p>Germany, Berlin</p>
                      <img 
                        src="https://framerusercontent.com/images/96HUBGy3ZgaIaP4euvJtfkk7g.png?scale-down-to=512" 
                        alt="German flag" 
                        className="contact__flag" 
                      />
                    </div>
                  </div>

                  <div className="contact__details">
                    <div className="contact__detail-item">
                      <div className="contact__icon">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3>+49 02608 95 88 47</h3>
                        <p>Call us</p>
                      </div>
                    </div>

                    <div className="contact__detail-item">
                      <div className="contact__icon">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3>support@whiteui.store</h3>
                        <p>Send your email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;