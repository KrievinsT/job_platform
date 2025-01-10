import React from 'react';
import './Team.scss';

const Team = () => {
  const teamMembers = [
    {
      name: "Emmalynn Mazzia",
      location: "London",
      role: "Construction Manager",
      image: "https://framerusercontent.com/images/qoV043xuWjRQQbibvoyjoBlaE4.jpg?scale-down-to=512"
    },
    {
      name: "Tamas Bunce",
      location: "New York",
      role: "Fitness Trainer",
      image: "https://framerusercontent.com/images/uDMfrAhga7lhY02vLr4Av0oihY.jpg?scale-down-to=512"
    },
    {
      name: "Luis Calvillo",
      location: "London",
      role: "Teacher Assistant",
      image: "https://framerusercontent.com/images/TpLrCpid6UuGjOkmgtZL4.jpg?scale-down-to=512"
    }
  ];

  return (
    <div className="team">
      <div className="team__header">
        <h2>Team members</h2>
        <button className="team__see-all">
          <span className="dots">•••</span>
          Meet our team
        </button>
      </div>

      <div className="team__grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card__image-wrapper">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-card__image"
              />
            </div>
            <h3 className="team-card__name">{member.name}</h3>
            <div className="team-card__details">
              <span>{member.location}</span>
              <span className="separator">/</span>
              <span>{member.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial">
        <div className="testimonial__content">
          <div className="testimonial__quote-mark">"</div>
          <h3 className="testimonial__text">
            Our platform is so easy to use. We've hired 40-50 different people worldwide in the past two years.
          </h3>
          <div className="testimonial__author">
            <div className="testimonial__author-info">
              <h4>Lubosek Hnilo</h4>
              <p>Founder at Workze Inc.</p>
            </div>
          </div>
        </div>
        <div className="testimonial__image-wrapper">
          <img 
            src="https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512" 
            alt="Lubosek Hnilo" 
            className="testimonial__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;