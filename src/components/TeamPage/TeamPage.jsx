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
          <div className="team-page__description">
            <p>In any industry where the people behind a company are as important as the company itself, you're likely to find a kind of expanded about page that includes information on individual employees. Meet the Team pages are popular among web design and other creative firms, but are also found on sites within various other industries. These pages are a valuable addition to any site where human contact is an important part of the industry. It adds a personal touch to the company and can lend trust to visitors.</p>
            <p>Highlighting your team's strengths and expressing your agency's profile is always a good idea. Plus, detailing the responsibilities of your team members would be a great addition, as seeing the talents of your team might be something your visitors are especially interested in. Creating a page adds to your company's brand value. Let your prospective clients know who you are and what you do best.</p>
          </div>
          <div className="team-page__stats">
            <div className="team-page__stat">
              <span className="team-page__stat-label">Founded</span>
              <span className="team-page__stat-value">2023</span>
              <span className="team-page__stat-description">When we founded</span>
            </div>
            <div className="team-page__stat">
              <span className="team-page__stat-label">Customers</span>
              <span className="team-page__stat-value">16k+</span>
              <span className="team-page__stat-description">Merchants worldwide</span>
            </div>
            <div className="team-page__stat">
              <span className="team-page__stat-label">Growth</span>
              <span className="team-page__stat-value">96%</span>
              <span className="team-page__stat-description">Revenue growth</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;