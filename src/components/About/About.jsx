import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './About.scss';

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about__hero">
          <div className="about__hero-container">
            <div className="about__hero-content">
              <h1 className="about__hero-title">About Us</h1>
              <p className="about__hero-subtitle">
                When you're searching for a job, there are a few things you can do to
                get the most out of your search
              </p>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__image-container">
            <img 
              src="https://framerusercontent.com/images/ysiNIVcuJDhsv2JXw6jISElP2k.webp?scale-down-to=2048" 
              alt="Team meeting"
              className="about__image" 
            />
          </div>

          <div className="about__missions-values-wrapper">
            <div className="about__missions-values">
              <div className="about__left-column">
                <div className="about__section missions">
                  <h2 className="about__section-title">Our missions</h2>
                  <p className="about__section-text">
                    Certain things catch your eye, but pursue only those that capture the heart. 
                    We become what we think about. The person who says it cannot be done should
                  </p>
                </div>

                <div className="about__section values">
                  <h2 className="about__section-title">Our values</h2>
                  <p className="about__section-text">
                    Life is what happens to you while you're busy making other plans. 
                    Build your own dreams, or someone else will hire you to build theirs.
                  </p>
                </div>
              </div>

              <div className="about__testimonial">
                <p className="about__testimonial-text">
                  I needed a change, to be able to make more money and have a life outside my job. 
                  Work App helped me discover something better.
                </p>
                <div className="about__testimonial-author">
                  <img 
                    src="https://framerusercontent.com/images/1EtVEnelxTuAvPeZCWOZMnHKjI.jpg?scale-down-to=512" 
                    alt="Naseema Al Morad"
                    className="about__testimonial-image" 
                  />
                  <div className="about__testimonial-info">
                    <h3 className="about__testimonial-name">Naseema Al Morad</h3>
                    <p className="about__testimonial-position">Developer at Dropbox Inc.</p>
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

export default About;