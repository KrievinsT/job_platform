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

          </div>
        </div>
      <Footer />
    </>
  );
};

export default About;