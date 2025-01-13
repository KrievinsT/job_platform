// TeamPage.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './TeamPage.scss';

const TeamPage = () => {
  return (
    <>
      <Header />
      <div className="team-page">
        <div className="team-page__hero">
          <h1 className="team-page__title">Our Team</h1>
          <p className="team-page__subtitle">
            When you're searching for a job, there are a few things you can do to
            get the most out of your search
          </p>
        </div>
        <div className="team-page__content">
          <div className="team-page__image-container">
            <img
              src="https://framerusercontent.com/images/iX4xpLRy3G4jOUQvJbL0DSpzU.webp?scale-down-to=1024"
              alt="Team meeting"
              className="team-page__image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;