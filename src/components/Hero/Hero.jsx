// Hero.jsx
import React from 'react';
import './Hero.scss';

const Hero = () => {
  const profileImages = [
    {
      src: "https://framerusercontent.com/images/qoV043xuWjRQQbibvoyjoBlaE4.jpg?scale-down-to=512",
      alt: "Profile 1",
      className: "profile-1"
    },
    {
      src: "https://framerusercontent.com/images/uDMfrAhga7lhY02vLr4Av0oihY.jpg?scale-down-to=512",
      alt: "Profile 2",
      className: "profile-2"
    },
    {
      src: "https://framerusercontent.com/images/TpLrCpid6UuGjOkmgtZL4.jpg?scale-down-to=512",
      alt: "Profile 3",
      className: "profile-3"
    },
    {
      src: "https://framerusercontent.com/images/SCLaExdmiXrn32AxMUnFpE5KBE.jpg?scale-down-to=512",
      alt: "Profile 4",
      className: "profile-4"
    },
    {
      src: "https://framerusercontent.com/images/u7pCeAYdJq6jB9fzr069s5YUaC4.jpg?scale-down-to=512",
      alt: "Profile 5",
      className: "profile-5"
    },
    {
      src: "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512",
      alt: "Profile 6",
      className: "profile-6"
    }
  ];

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__background"></div>
        
        <div className="hero__content">
          <h1 className="hero__title">Find jobs in New York</h1>
          <p className="hero__subtitle">
            When you're searching for a job or a new career opportunity, there are a few things you can do to get the most out of your search
          </p>
        </div>

        <div className="hero__profiles">
          {profileImages.map((image, index) => (
            <div key={index} className={`hero__profile ${image.className}`}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <div className="hero__search">
          <div className="hero__search-container">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="hero__search-input"
            />
            <button className="hero__search-button">Search</button>
          </div>
          <p className="hero__search-text">Search for 148+ job positions across the world</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;