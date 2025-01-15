import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './TeamPage.scss';

const TeamMember = ({ name, role, description, imageUrl }) => (
  <div className="team-page__member">
    <div className="team-page__member-image-container">
      <img src={imageUrl} alt={name} className="team-page__member-image" />
    </div>
    <h3 className="team-page__member-name">{name}</h3>
    <span className="team-page__member-role">{role}</span>
    <p className="team-page__member-description">{description}</p>
    <div className="team-page__member-social">
      <a href="#" className="team-page__social-link">
        <img 
          src="https://framerusercontent.com/images/F0wxdQSbevbreVhTAKkyb5gT24.svg" 
          alt="Facebook" 
          className="team-page__social-icon"
        />
      </a>
      <a href="#" className="team-page__social-link">
        <img 
          src="https://framerusercontent.com/images/w1pGe1WuJVWy7Y6FAxsKvCJkos.svg" 
          alt="Twitter" 
          className="team-page__social-icon"
        />
      </a>
      <a href="#" className="team-page__social-link">
        <img 
          src="https://framerusercontent.com/images/H7vfw37wuCe2vnZ4kE4uscYM38.svg" 
          alt="Instagram" 
          className="team-page__social-icon"
        />
      </a>
    </div>
  </div>
);

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Jurriaan Broek",
      role: "Design",
      description: "In any industry where the people a company are as the company",
      imageUrl: "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512"
    },
    {
      name: "Regina Pollastro",
      role: "Development",
      description: "Independent branding and experience agency and website",
      imageUrl: "https://framerusercontent.com/images/7PlfCeGnIR3gF1pUykJHdeM.jpg?scale-down-to=512"
    },
    {
      name: "Sukhnam Chander",
      role: "Support",
      description: "Massive Media and their core values full-service agency that combines",
      imageUrl: "https://framerusercontent.com/images/RkVKXOogAEAPpnL2xcvvnJTPI4.jpg?scale-down-to=512"
    },
    {
      name: "Indu Chakarvarti",
      role: "Development",
      description: "The page explains why you want to work with Major Tom and allows",
      imageUrl: "https://framerusercontent.com/images/WldlNAnTGvpsen5N0CIwEGQT14.jpg?scale-down-to=512"
    },
    {
      name: "Alexa Richardson",
      role: "Management",
      description: "Embellished with retro illustrations, a short, to-the-point design explains",
      imageUrl: "https://framerusercontent.com/images/QWZqhEnHd9DUfSeAhNT02y1oHA.jpg?scale-down-to=512"
    },
    {
      name: "Amelia Cabal",
      role: "Photograph",
      description: "Contains info about the members and the agency the services provided",
      imageUrl: "https://framerusercontent.com/images/oMjT4bnftYOG7Bhb8jkIwzOnCXs.jpg?scale-down-to=512"
    }
  ];

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
          
          <div className="team-page__members-section">
            <h2 className="team-page__members-title">Meet the team</h2>
            <p className="team-page__members-description">
              Workze is an independent branding and experience design agency with a great variety of services, such as 
              branding, marketing, and web design. The Vancouver-based agency has a modern and elegant website. 
              Detailing the responsibilities of your team members would be a great addition.
            </p>
            <div className="team-page__members-grid">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;