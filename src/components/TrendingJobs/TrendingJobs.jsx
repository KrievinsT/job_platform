import React from 'react';
import { ShoppingCart, Users, TrendingUp } from 'lucide-react';
import './TrendingJobs.scss';

const TrendingJobs = () => {
  const jobs = [
    {
      icon: <ShoppingCart className="job-card__icon" />,
      title: "Sales Consultant",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$187,300",
    },
    {
      icon: <Users className="job-card__icon" />,
      title: "Private Jet Sales Consultant",
      location: "Greenwich, NY",
      type: "Hybrid Remote",
      salary: "$150,000",
    },
    {
      icon: <TrendingUp className="job-card__icon" />,
      title: "Rate Sales Analyst",
      location: "New York, NY",
      type: "Full-time",
      salary: "$195,700",
    },
  ];

  const recommendedJobs = [
    "Sales Consultant", "Private Jet Sales Consultant", "Rate Sales Analyst",
    "Sales Assistant Associate", "Flagship Sales Specialist",
    "Digital Sales Representative", "Sales Communications Specialist",
    "Associate Digital Designer", "Product Manager",
    "Marketing Project Manager", "Distribution Planning Manager",
    "Social Media Manager", "Online Campaign Manager",
    "Assistant Manager", "Program Manager", "Community Manager",
    "Employer Branding & Recruitment", "Internal Communications Manager"
  ];

  return (
    <div className="trending-jobs">
      <div className="trending-jobs__header">
        <h2>Trending jobs</h2>
        <button className="trending-jobs__see-all">
          <span className="dots">•••</span>
          See all jobs
        </button>
      </div>

      <div className="trending-jobs__grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-card__icon-wrapper">
              {job.icon}
            </div>
            <h3 className="job-card__title">{job.title}</h3>
            <div className="job-card__details">
              <span>{job.location}</span>
              <span className="separator">/</span>
              <span>{job.type}</span>
            </div>
            <div className="job-card__salary">
              <span className="amount">{job.salary}</span>
              <span className="label">Avg. salary</span>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-section">
        <div className="explore-section__content">
          <span className="explore-section__label">Recommended jobs</span>
          <h2 className="explore-section__title">Explore trending<br />job listings</h2>
          <p className="explore-section__description">
            Along conventional ads and below the line activities, organizations have come to realize that they need to invest
          </p>
        </div>

        <div className="explore-section__tags">
          {recommendedJobs.map((job, index) => (
            <span key={index} className="tag">{job}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingJobs;