import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contact.scss';

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__map-section">
              <div className="contact__map-overlay">
                <div className="contact__map-info">
                  <div className="contact__location-row">
                    <div className="contact__location-details">
                      <div className="contact__coordinates">52°22'33.2"N 4°53'28.7"E</div>
                      <div className="contact__map-address">9VGR+963 Amsterdam, Netherlands</div>
                    </div>
                    <a href="#" className="contact__directions-button">
                      <span className="contact__map-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9V4"></path>
                        </svg>
                      </span>
                      Directions
                    </a>
                  </div>
                  <a href="#" className="contact__map-link">View larger map</a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5454796253164!2d4.89192!3d52.373791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzMzLjIiTiA0wrA1MycyOC43IkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="contact__info-section">
              <div className="contact__info-content">
                <h1>Contact Us</h1>
                <p className="contact__description">
                  Become our team member, apply for the job post today 
                  and send us your detailed CV.
                </p>
                
                <div className="contact__office-container">
                  <h2 className="contact__office-header">Headquarter office</h2>
                  <div className="contact__address-info">
                    <p>Storkower Strasse 41</p>
                    <p>Rheinland-Pfalz</p>
                    <p>56379</p>
                    <div className="contact__location">
                      <p>Germany, Berlin</p>
                      <div className="contact__flag-container">
                        <img 
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDMiPjxwYXRoIGQ9Ik0wIDBoNXYxSDB6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTAgMWg1djFIMHoiIGZpbGw9IiNERTAwMDAiLz48cGF0aCBkPSJNMCAyaDV2MUgweiIgZmlsbD0iI0ZGQ0UwMCIvPjwvc3ZnPg=="
                          alt="German flag"
                          className="contact__flag"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact__contact-item">
                  <div className="contact__icon-container">
                    <Phone size={18} color="white" />
                  </div>
                  <div className="contact__contact-content">
                    <h3>+49 02608 95 88 47</h3>
                    <p>Call us</p>
                  </div>
                </div>

                <div className="contact__contact-item">
                  <div className="contact__icon-container">
                    <Mail size={18} color="white" />
                  </div>
                  <div className="contact__contact-content">
                    <h3>support@whiteui.store</h3>
                    <p>Send your email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;