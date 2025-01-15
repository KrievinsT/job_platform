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
            <div className="about__intro">
              <h2 className="about__intro-title">Our missions, goals, and values</h2>
              <p className="about__intro-text">
                In any industry where the people behind a company are as important as the company itself, 
                you're likely to find a kind of expanded page that includes information on individual employees.
              </p>
            </div>

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

          <div className="about__offices">
            <h2 className="about__offices-title">Our offices and locations</h2>
            <p className="about__offices-subtitle">
              The page displays hilarious images of the core team working from
              one of the team member's while they still had no office space.
            </p>
            
            <div className="about__offices-grid">
              <div className="about__office-item">
                <div className="about__office-image-container">
                  <img 
                    src="https://framerusercontent.com/images/99OcPMshZltQEqk7eQjGeX3uQM.webp?scale-down-to=512"
                    alt="Germany office"
                    className="about__office-image"
                  />
                </div>
                <div className="about__office-info">
                  <div className="about__office-header">
                    <img 
                      src="https://framerusercontent.com/images/96HUBGy3ZgaIaP4euvJtfkk7g.png?scale-down-to=512"
                      alt="German flag"
                      className="about__office-flag"
                    />
                    <h3 className="about__office-location">Germany, Berlin</h3>
                  </div>
                  <p className="about__office-address">Storkower Strasse 41</p>
                  <p className="about__office-region">Rheinland-Pfalz</p>
                  <p className="about__office-phone">+49 02608 95 88 47</p>
                  <p className="about__office-postal">56379</p>
                </div>
              </div>

              <div className="about__office-item about__office-item--reverse">
                <div className="about__office-image-container">
                  <img 
                    src="https://framerusercontent.com/images/lhe9X8njyLiZNNuDlWzUufsQlso.webp?scale-down-to=512"
                    alt="Spain office"
                    className="about__office-image"
                  />
                </div>
                <div className="about__office-info">
                  <div className="about__office-header">
                    <img 
                      src="https://framerusercontent.com/images/MgMKGKiZuwKTGFQwWqayLahHu4.webp?scale-down-to=512"
                      alt="Spanish flag"
                      className="about__office-flag"
                    />
                    <h3 className="about__office-location">Spain, Madrid</h3>
                  </div>
                  <p className="about__office-address">Maestro Puig Valera 82</p>
                  <p className="about__office-region">Grandas De Salime</p>
                  <p className="about__office-phone">+34 744 180 148</p>
                  <p className="about__office-postal">33730</p>
                </div>
              </div>

              <div className="about__office-item">
                <div className="about__office-image-container">
                  <img 
                    src="https://framerusercontent.com/images/2sVvz29SufM0lKndw5kRd4Hfs.webp?scale-down-to=512"
                    alt="UK office"
                    className="about__office-image"
                  />
                </div>
                <div className="about__office-info">
                  <div className="about__office-header">
                    <img 
                      src="https://framerusercontent.com/images/tcPi7TkkUTrHLG5j7CcXTBAN4vY.png?scale-down-to=512"
                      alt="UK flag"
                      className="about__office-flag"
                    />
                    <h3 className="about__office-location">United Kingdom, London</h3>
                  </div>
                  <p className="about__office-address">37 Telford Street</p>
                  <p className="about__office-region">Upper Rochford</p>
                  <p className="about__office-phone">+44 070 4871 1731</p>
                  <p className="about__office-postal">KA10 5FL</p>
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